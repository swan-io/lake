## 2.7.7

Changes:

- Update dependencies (23035ea)

## 2.7.6

Features:

- Add the possibility to copy a different text in CopyableRegularTextCell (c171661)
- Add tooltips on text and on list cells (06074b7)

## 2.7.5

Features:

- Add neutral alert (5d24eeb4)

Fixes:

- Fix popover alignment & focus issues (1e13ba5f, 137e7d00)

## 2.7.4

Features:

- Add `variant` prop to balance & link cell (123e3e2, b2b137e)

Changes:

- Make inputs 42px tall (8966470)
- Refactored FixedListView (3d2095f)

Fixes:

- Fix multiline input height (b21ac08)

## 2.7.3

Fixes:

- Fixed focus management on tab navigation on Combobox (069f3271)

## 2.7.2

Fixes:

- Fixed a bug that caused an infinite loop on FixedListView tab navigation (dde7ca17)

## 2.7.1

Changes:

- Update dependencies (fae5dc8)

## 2.7.0

Features:

- Add rejections translations to shared-business (71ad0fc4, 25af8227)
- Add ability to add a counter to TextInput (0da31f23)

Changes:

- Improve RIB template (a0355627)

## 2.6.1

Changes:

- Improve Switch / Checkboxes A11Y (c2a4dd7)
- Update dependencies (3622e5e)

## 2.6.0

Features:

- Make RIB template country-aware (ad9e66e3)
- Add PressableText to TabView (60f88200)

## 2.5.0

Changes:

- Datepicker component (aea7df7)
- Add bank icon (bac7d40)
- Timepicker component (2c0ab99)
- 3d Card preview component (4ddfe30)
- Date picker in date filter (ac40253)
- Add check icon (9a6dd66)

## 2.4.0

Changes:

- Defaut type of control in beneficiary form (7dee3a6)
- Add Dutch account country (65eed14)
- Add countries in UBO residency address select (695a420)
- Add style options for `PlainListView` and add `lake-card-filled` icon (a8bca34)
- Add `width` option in FilterRadio and FilterCheckbox (6081a72)
- Change QuickActions API (116a352)

Fixes:

- Partner logo in RIB (ecac003)

## 2.3.1

Changes:

- Pass the whole errorInfo object to `ErrorBoundary` `onError` (6d1ac33)

## 2.3.0

Changes:

- New component `ErrorBoundary` (9f43de6)

## 2.2.1

Changes:

- Update dependencies (cfef368)

## 2.2.0

Changes:

- Set background color on TabView only when position is sticky (471710a)
- New component `RIB` (98b0300)
- Add optional label in BeneficiaryForm (fbb9c35)
- Add max file max size in SupportingDocuments (ec2ab4d)
- Don't handle any more document with `Other` tag as `PowerOfAttorney` document (70baf79)

Fixes:

- Hide delete button in FileTile when `onRemoveFile` is undefined (4b9000b)

## 2.1.4

Changes:

- Add residency address for spanish iban (f45ec524)

## 2.1.3

Changes:

- Handle GMaps breaking change (08e13dcb)

## 2.1.2

Changes:

- Update dependencies (820f939)

## 2.1.1

Fixes:

- Beneficiary form, keep address fields mounted if user already fill it and go to previous step (ead55cf)

## 2.1.0

Changes:

- Refacto country picker (3d507d4)
- Change registration number condition (0f5f28a)

Fixes:

- Fix keyboard navigation in Select (7297aba)

## 2.0.3

Changes:

- Update dependencies (7f5bf89)

## 2.0.2

Changes:

- Add ellipsis style in SimpleTileCell (37a146a)
- Remove language from URL (3ef12f2)
- Remove testing-library/jest-dom (eb01cd1)
- Add disabled prop in LakeTooltip (c9142de)

## 2.0.1

Changes:

- Update dependencies (f784f9b)

## 2.0.0

Changes:

- Update Boxed (0a2bd62)

## 1.9.1

Fixes:

- Unfix `@swan-io/lake` peer dependency version (af90891)

## 1.9.0

Changes:

- Improve file upload error management (2d53655)
- Update `UploadFileStatus` type (2d53655)

Fixes:

- Fix `positive` colors (6bb6901)

## 1.8.0

Changes:

- Enforce CCA3 validity for UBOs (3d7fb44)
- Improve mobile gestures (537f287, 4dd73d2)
- Update Storybook (bece24e)

## 1.7.0

Changes:

- Update Boxed (20901a9)

## 1.6.0

Changes:

- Add sort UI for mobile (0252fa1)
- Update component using Google API name (1ea2f17)
- Fix filters UI for mobile (2fe3054)
- Update make field optional for german UBO (212d60e)
- Fix button background with `forceBackground` + `disabled` (9b1ad9d)
- Fix close button position in modal (0cc87b3)
- Update refacto tax identification number validation and input (99d1f02)

## 1.5.1

Fixes:

- Fix `transitionProperty` syntax (6b84764)

## 1.5.0

Changes:

- Update to `react-native-web` 0.19.1 (d867cdc)
- Replace `nativeID` prop by `id` (8efe2c7)
- Remove `Touchable*` components usage (6214e90)
- Replace `pointerEvents` props by `pointerEvents` style (389b150)
- Remove `StyleSheet.compose` usage (ab6f8a4)
- Replace `selectable` prop by `userSelect` style (01384a3, 057e231)
- Replace `focusable` prop by `tabIndex` (01538ca)
- Replace `keyboardType` prop by `inputMode` (9b32717)
- Replace `returnKeyType` prop by `enterKeyHint` (182484f)
- Replace `editable` prop by `readOnly` (24646c5)
- Replace `numberOfLines` `TextInput` prop by `rows` (6903c95)
- Replace `transform` style array syntax with string one (9009406)
- Replace `shadow*` styles with `boxShadow` (234da7a)
- Replace `accessibilityRole` prop by `role` (2fdb7a0)
- Remove `Animated.*` components usage (1e4487f)
- Replace `accessibility*` props by `aria-*` (c04f789)
- Remove `eslint-plugin-react-native-a11y` dependency (ac868ef)
- Remove legacy `Button` and `CheckBox` components (ba44c02, a89cf0f)

## 1.4.4

Changes:

- Remove radio in supported documents (51028b4)
- Change input error size (5f5a844)
- Add lint staged (edd2106)
- Add upload icon (fb485f0)

Fixes:

- Fix UBO form payload (81deb88)

## 1.4.3

Fixes:

- Fix `useUrqlMutation` hook input type (78e1c97)

## 1.4.2

Changes:

- Remove `graphql` dependency (cd48adf)

## 1.4.1

Fixes:

- Fix changelog shape (86246ff)

## 1.4.0

Changes:

- Don't build `__stories__` (0c8d18b)
- Add script to link packages for local development (9fc09dd)
- Fix dependencies versions (a8bc6a6)

## 1.3.2

Changes:

- Add max char count indicator in LakeTextinput (a3230d5)
- Make LakeSelect handle long value with ellipsis (a3230d5)
- Improve partner color variations computation (a3230d5)
- Sync translations (a3230d5)

## 1.3.1

Changes:

- Fix color algorithm (ab6c103)

## 1.3.0

Changes:

- Sync updates (3c1234c, aadcdad, a575e67)

## 1.2.6

Changes:

- Load missing GMaps library (2aa7dbf)

## 1.2.5

Changes:

- Make lake a peer dependency for shared-business (2116bc8)

## 1.2.4

Changes:

- Add missing assets to npm package (08a48d8)

## 1.2.3

Changes:

- Add icons to npm package (a152782)

## 1.2.2

Changes:

- Add translations to npm package (74a1cbc)

## 1.2.1

Changes:

- Add assets to npm package (21513c9)

## 1.2.0

Changes:

- Sync changes (4b84ae9)

## 1.1.0

Features:

- Add `AddressSearchInput` component (4670a65)

## 1.0.0

Initial release
