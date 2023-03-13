// https://github.com/necolas/react-native-web/blob/0.18.10/packages/react-native-web/src/exports/View/index.js#L149
const viewStyle = {
  alignItems: "stretch",
  backgroundColor: "transparent",
  borderColor: "black",
  borderStyle: "solid",
  borderWidth: 0,
  boxSizing: "border-box",
  display: "flex",
  flexBasis: "auto",
  flexDirection: "column",
  flexShrink: 0,
  listStyle: "none",
  margin: 0,
  minHeight: 0,
  minWidth: 0,
  padding: 0,
  position: "relative",
  textDecoration: "none",
  zIndex: 0,
} as const;

// https://github.com/adobe/react-spectrum/blob/react-aria%403.22.0/packages/@react-aria/visually-hidden/src/VisuallyHidden.tsx#L32
export const visuallyHiddenStyle = {
  borderWidth: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  marginBottom: -1,
  marginLeft: 0,
  marginRight: -1,
  marginTop: 0,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
} as const;

export const commonStyles = {
  center: { alignItems: "center", justifyContent: "center" },
  centerSelf: { marginHorizontal: "auto" },
  fill: { flexGrow: 1, flexShrink: 1 },
  hidden: { visibility: "hidden" },
  view: viewStyle,
  visuallyHidden: visuallyHiddenStyle,
} as const;
