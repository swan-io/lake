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

- `utils/fraudReport/`: types, adapter interface, fake adapter, and the pure logic (validation, form ↔ input conversion, prefill, rejection → step mapping).
- `hooks/useFraudReportFlow.ts`: the flow (draft → update → submit or cancel, step moves, rejection routing). It talks only to the adapter.
- `components/FraudReport/`: the screens and the `FraudReport` component.
- `__stories__/FraudReport.stories.tsx`: every step and state, on the fake adapter.
- `utils/__tests__/fraudReport.<file>.test.ts`: unit tests.
- Strings: `locales/`, keys prefixed `fraudReport.`.

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
- Nothing is saved before the transactions are picked: the first draft needs at least one transaction ID. Each later step sends one update.
- The transaction picker shows only the victim's cards, filtered on the client from the card's account membership.
- `victimAccountMembershipId` is sent only on transfer-only cases. `fraudCardDetails` is sent only with card transactions, `fraudTransferDetails` only with transfers.
- Analytics: `FraudReport` emits flow events through an `onEvent` prop, with no personal data (no names or free text). Lake doesn't know which analytics tool the app uses.

## Form and validation

- `FraudReportFormValues` (`toInput.ts`) holds what the user entered, as API values (enums, `YYYY-MM-DD` dates). Build inputs only with `toDraftInput` and `toUpdateInput`.
- `toUpdateInput` takes the saved case and the transaction IDs last sent (the user's selection, not the case's `transactions`). It leaves `transactionIds` out when the selection is the same.
- The form has no "actions taken" field yet. `fraudTransferDetails` is never sent, so the stored one stays. `toUpdateInput` sends back the saved case's `hasFiledPoliceComplaint` and `hasContactedMerchant`.
- Validators (`validation.ts`) return a `FraudReportValidationError` code, never text. Each screen maps the codes to its own strings.
- A date is in the future when it is after today in UTC.
- Get a transaction's rail from its type with `getTransactionRail` (`rail.ts`). A type with no rail can't be reported.

## Stubs

- `fakeApi.ts` is the only stub. It runs the API's checks in the API's order on seeded transactions and account memberships. Use it in stories and tests. Never ship it in an app.
- The fake doesn't run the input format checks (dates in the future, string formats, `None` with other values): the client-side validators own them.
- When the API changes, update `types.ts`, then the fake adapter, then the tests.

## Patterns to copy

- Data access through props and callbacks: `components/SupportingDocumentCollection.tsx`.
- Stories: `__stories__/SupportingDocumentCollection.stories.tsx` and `__stories__/_StoriesComponents.tsx`.
- Unit tests for pure logic: `utils/__tests__/validation.test.ts`.
- Branch on unions with `ts-pattern`. Use Boxed from `@bloodyowl/boxed` (`Option`, `Result`, `AsyncData`, `Future`) over null checks and thrown errors.
