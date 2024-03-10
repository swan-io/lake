export const getRootElement = (element: Element | null): Element | null => {
  let current = element;

  while (current) {
    const { parentElement: parent } = current;

    if (!parent) {
      break;
    }
    if (parent === document.body || parent.matches("[aria-modal=true]")) {
      return current;
    }

    current = parent;
  }

  return null;
};
