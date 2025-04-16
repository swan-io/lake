// Based on https://github.com/necolas/react-native-web/blob/0.20.0/packages/react-native-web/src/exports/Clipboard/index.js

export const setClipboardText = (text: string): boolean => {
  // add the text to a hidden node
  const node = document.createElement("span");

  node.textContent = text;
  node.style.opacity = "0";
  node.style.position = "absolute";
  node.style.userSelect = "auto";
  node.style.whiteSpace = "pre-wrap";

  document.body.appendChild(node);

  // select the text
  const selection = window.getSelection();

  if (selection == null) {
    return false;
  }

  selection.removeAllRanges();

  const range = document.createRange();
  range.selectNodeContents(node);

  selection.addRange(range);

  try {
    document.execCommand("copy");
  } catch {
    return false;
  }

  // remove selection and node
  selection.removeAllRanges();
  document.body.removeChild(node);

  return true;
};
