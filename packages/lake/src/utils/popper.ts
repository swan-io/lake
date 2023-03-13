import { Modifier } from "react-popper";

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

export const matchReferenceWidthModifier: Modifier<"matchReferenceWidth"> = {
  name: "matchReferenceWidth",
  requires: ["computeStyles"],
  enabled: false,
  phase: "beforeWrite",
  fn({ state }) {
    if (state.styles.popper) {
      state.styles.popper.width = state.rects.reference.width.toString() + "px";
    }
  },
  effect({ state }) {
    if (state.elements.reference instanceof HTMLElement) {
      state.elements.popper.style.width = state.elements.reference.offsetWidth.toString() + "px";
    }
  },
};
