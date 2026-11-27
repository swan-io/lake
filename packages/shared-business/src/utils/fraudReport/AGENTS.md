# Fraud report

Rules for code in the fraud report feature: reporting fraudulent transactions to Swan as a dispute case, in Web Banking and the Dashboard. These are current rules only. When a rule changes, update it here in the same change.

## Glossary

- **Dispute case**: what the API stores. The only type is `Fraud` (`FraudDisputeCase`). Statuses: `Draft`, `Expired`, `Canceled`, `Submitted`.
- **Fraud report**: the flow that builds a dispute case, from the intro to the submitted screen.
- **Victim**: the account membership the fraud was committed against. On a case with card transactions, it is the cardholder, derived by Swan. On a transfer-only case, the flow sends `victimAccountMembershipId`.
- **Rail**: card or transfer. A case is card-only, transfer-only or mixed, depending on the transactions it holds.
- **Rejection**: a typed answer from a mutation that the flow can act on (`__typename` ends with `Rejection`). An **error** is anything else: network, `FORBIDDEN`, `BAD_USER_INPUT`.
- **Adapter**: the `FraudReportApi` object an app passes in. It holds the app's GraphQL client and token.

## Where things go

- `utils/fraudReport/`: types, adapter interface, fake adapter, and the pure logic (validation, form ↔ input conversion, prefill, resume step, rejection → step mapping, stepper). A screen's own logic (its starting state, its options, what Continue sends) goes in `utils/fraudReport/<screen>.ts`, like `victim.ts`, so it can be unit-tested.
- `hooks/useFraudReportFlow.ts`: the flow (draft → update → submit or cancel, step moves, rejection routing). It talks only to the adapter.
- `components/FraudReport/`: the screens and the `FraudReport` component.
- `__stories__/FraudReport.stories.tsx`: the whole flow, on the fake adapter. Each screen also has its own `__stories__/FraudReport<Screen>.stories.tsx`, with every state.
- `utils/__tests__/fraudReport.<file>.test.ts`: unit tests of `utils/fraudReport/`. The flow hook's tests: `hooks/__tests__/useFraudReportFlow.test.ts`, on the fake adapter.
- A screen's own interactions (a button calling its prop) are tested with a `play` function in its story, run by `pnpm test-a11y`. Turn the a11y check off on that story when another story of the screen already runs it.
- Strings: `locales/`, keys prefixed `fraudReport.`.
- Rejection messages: `rejection.<__typename>` keys, shown with `translateError(error.rejection)`. Passing the whole `FraudReportApiError` shows the generic error. `fraudReport.types.test.ts` checks that every rejection in `types.ts` has one.

## Adapter contract

- Lake never owns a GraphQL client, a token or a route. The app passes data access in through `FraudReportApi`, like `SupportingDocumentCollection` takes `generateUpload` and `uploadFile`.
- Types in `types.ts` mirror the partner GraphQL schema. Input types match the schema field for field. `FraudReportCase` flattens objects to IDs (`accountId`, `victimAccountMembershipId`) and names `reportedTransactions` `transactions`. Empty values are `null` (empty lists are `[]`), enums are string unions and rejections keep their GraphQL `__typename`. The app maps its generated types onto them in its adapter, so a schema change breaks the app build in the adapter, not in Lake.
- Every adapter call returns `Future<Result<Value, FraudReportApiError<Rejection>>>`. An adapter maps a payload whose `__typename` ends with `Rejection` to `{ kind: "rejection" }`, and everything else (client errors, GraphQL errors) to `{ kind: "error" }`.
- `update` follows the API: a field left out keeps the stored value, `null` clears it. `transactionIds` can be left out, never cleared. A group that is sent (`fraudDetails`, `fraudCardDetails`, `fraudTransferDetails`) replaces the stored group whole: a field left out of it is cleared.
- `FraudReportCase.transactions` lists only the transactions the caller can view, each with its rail. During a session, take the rails from the user's current selection; read `transactions` only when resuming a case.
- Build `transactionIds` for `update` from the user's selection, never from `FraudReportCase.transactions`: hidden transactions would be dropped from the case. Leave it out when the selection didn't change.
- `getCase` returns `None` for a case that doesn't exist or that the caller can't read. `findDrafts` returns the account's drafts that include one of the given transactions, newest first.
- Until the API ships them: every adapter call maps the case with `transactions: []` (no `reportedTransactions` yet), `findDrafts` returns `[]`, `cancel` returns `{ kind: "error" }`, and uploads can't send the dispute case document purposes.
- Don't add app-specific fields (project ID, member ID, permission names) to the adapter. Pass what the screens need as props.

## Flow rules

- Victim first, then transactions, then the incident, details and documents.
- Details goes through the Card sub-step when the selection has a card transaction, Transfer when it has a transfer, and Fraudster when `reportedReason` is `Manipulated`, in the order of `fraudReportDetailsSteps`. Take the sub-steps from `getDetailsSteps` (`stepper.ts`), in the flow and in the inputs. While Fraudster isn't among them, send the fraudster answers as `null`.
- Nothing is saved before the transactions are picked: the first draft needs at least one transaction ID. The transactions step's Next drafts the case, or updates it once it exists. The incident's and each Details sub-step's Next sends one update. The documents step's Next submits the case. Going back never calls the API.
- A step moves on with `next(values)`, passing only its own fields. On a rejection, the flow moves to the step `getRejectionStep` returns, with the values kept, and exposes it as `error`. On an error (network, `FORBIDDEN`, `BAD_USER_INPUT`), it stays on the step with the values, exposes it as `error`, and Next sends the call again. `error` stays until the user presses Next, Previous or Cancel again. The submitted step has none; on the rejected step it stays. While a call is pending, Next, Previous and Cancel do nothing. Only Cancel moves from the submitted or the rejected step.
- `cancel()` discards the report: the flow starts over from the intro, then calls the `onExit` the app passes to it. Before the draft exists, and on the submitted or the rejected step, it makes no API call. Otherwise it cancels the draft through the adapter first. A rejection or an error from cancel is handled like one from Next, and `onExit` isn't called. Leaving without `cancel` keeps the draft until it expires.
- Resume: when the app passes `resumeFrom` (the account and the transactions the report starts from), the flow calls `findDrafts` once at start and exposes the latest draft as `resumable`. Not finding drafts, or a failed call, starts a new report. While the lookup runs, Next on the intro does nothing; after 5 seconds without an answer the flow gives up and starts a new report. The offer lasts only on the intro: `resume()` and `startOver()` work there, and starting the report closes the offer and keeps the old draft. `resume()` prefills with `toFormValues`, keeps the case as the saved draft and opens the step `getResumeStep` (`resume.ts`) returns: the first one the user hasn't answered, never the victim. A draft that doesn't hold every `resumeFrom` transaction opens on the transactions step, so the user can add the others. `startOver()` cancels the old draft, then closes the offer so a new report starts. On an error it keeps the offer and exposes the error, so the user can try again or resume; on a rejection the case is no longer a draft, so it closes the offer. If the case was submitted elsewhere, it goes to the submitted screen instead, with the case ID.
- Where a rejection sends the user is decided only in `getRejectionStep` (`rejections.ts`): back to a step where the user can fix it, or `Rejected` for the final screen. An incomplete case goes to the earliest step of its missing fields. A field with no input in the form, or a victim once the draft exists, can't be fixed: if nothing else can, the report is rejected. A field whose sub-step isn't in the flow goes to the step that adds it (Incident for Fraudster, Transactions for Card). A wrong status on a case that is already submitted goes to the submitted screen.
- Once the draft exists, the victim can't change: the flow ignores a new one. The flow exposes the victim only in `values`, and the case ID as `disputeCaseId` once the draft exists.
- The transaction picker shows only the victim's cards, filtered on the client from the card's account membership.
- `victimAccountMembershipId` is sent only on transfer-only cases. `fraudCardDetails` is sent only with card transactions, `fraudTransferDetails` only with transfers.
- Analytics: `FraudReport` emits flow events through an `onEvent` prop, with no personal data (no names or free text). Lake doesn't know which analytics tool the app uses.

## Form and validation

- `FraudReportFormValues` (`toInput.ts`) holds what the user entered, as API values (enums, `YYYY-MM-DD` dates). Build inputs only with `toDraftInput` and `toUpdateInput`.
- `toUpdateInput` takes the saved case and the transaction IDs last sent (the user's selection, not the case's `transactions`). It leaves `transactionIds` out when the selection is the same.
- `toFormValues` (`prefill.ts`) fills the form from a resumed draft. A victim the caller can't see stays out, so the update keeps the stored one. Its `transactions` are only the ones the caller can view, and the rail comes from them: until the API says whether some are hidden, a resumed case can show the wrong Details sub-steps, send a victim the API rejects, or drop hidden transactions when the selection changes.
- The form has no "actions taken" field yet. `fraudTransferDetails` is never sent, so the stored one stays. `toUpdateInput` sends back the saved case's `hasFiledPoliceComplaint` and `hasContactedMerchant`.
- Validators (`validation.ts`) return a `FraudReportValidationError` code, never text. Each screen maps the codes to its own strings.
- A date is in the future when it is after today in UTC.
- Get a transaction's rail from its type with `getTransactionRail` (`rail.ts`). A type with no rail can't be reported.

## Screens

- Every step from Victim to the submitted screen renders inside `FraudReportLayout` (`components/FraudReport/FraudReportLayout.tsx`). The intro has no stepper. Fraud report steps aren't links: don't give them a URL.
- Give the layout the active step and the Details sub-steps the report goes through, in any order. The active one can be left out.
- Change the steps and the sub-step bars in `getFraudReportStepper` (`stepper.ts`), not in the layout.
- Use Lake's components as they are, set only through their props. Don't override their styles, or copy them, to match a Figma frame: when a frame and the design system differ, the design system wins.
- A step that leads to another ends with `FraudReportFooter`, rendered inside `FraudReportLayout`, for Previous and Continue. Leave `onPrevious` out on the first step.
- The stepper and the footer use the current color, which the app sets.
- A step reads whether the layout is small with `useFraudReportSmallLayout()` and doesn't measure it again.
- A step's props include `FraudReportStepProps<K>` (`FraudReportLayout.tsx`), `K` being the form fields it owns: it starts from `values` and calls `onNext` with the same fields, so `FraudReport` wires it with `values={flow.values}` and `onNext={flow.next}`. Fields it reads but doesn't own come as separate props. It never shows or sends a value that is no longer among its options.
- The victim step takes the account memberships to pick from and the current one as props. The current one is `None` for an operator, who picks from every listed member. The app decides which memberships are listed.

## Stubs

- `fakeApi.ts` is the only stub. It runs the API's checks in the API's order on seeded transactions and account memberships. Use it in stories and tests. Never ship it in an app.
- The fake doesn't run the input format checks (dates in the future, string formats, `None` with other values): the client-side validators own them.
- When the API changes, update `types.ts`, then the fake adapter, then the tests.

## Patterns to copy

- Data access through props and callbacks: `components/SupportingDocumentCollection.tsx`.
- Stories: `__stories__/SupportingDocumentCollection.stories.tsx` and `__stories__/_StoriesComponents.tsx`.
- Unit tests for pure logic: `utils/__tests__/validation.test.ts`.
- Branch on unions with `ts-pattern`. Use Boxed from `@bloodyowl/boxed` (`Option`, `Result`, `AsyncData`, `Future`) over null checks and thrown errors.
