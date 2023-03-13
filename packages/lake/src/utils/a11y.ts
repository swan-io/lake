// Pulled from https://github.com/KittyGiraudel/focusable-selectors
const FOCUSABLE_SELECTOR = [
  'a[href]:not([tabindex^="-"])',
  'area[href]:not([tabindex^="-"])',
  'input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])',
  'input[type="radio"]:not([disabled]):not([tabindex^="-"])',
  'select:not([disabled]):not([tabindex^="-"])',
  'textarea:not([disabled]):not([tabindex^="-"])',
  'button:not([disabled]):not([tabindex^="-"])',
  'iframe:not([tabindex^="-"])',
  'audio[controls]:not([tabindex^="-"])',
  'video[controls]:not([tabindex^="-"])',
  '[contenteditable]:not([tabindex^="-"])',
  '[tabindex]:not([tabindex^="-"])',
].join(", ");

export const getFocusableElements = (
  rootNode: Element = document.documentElement,
  includeRoot = true,
): HTMLElement[] => {
  return (
    includeRoot && rootNode.matches(FOCUSABLE_SELECTOR) ? [rootNode as HTMLElement] : []
  ).concat(Array.from(rootNode.querySelectorAll(FOCUSABLE_SELECTOR)));
};
