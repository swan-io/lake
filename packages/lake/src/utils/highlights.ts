import { isNullishOrEmpty } from "./nullish";

const highlightName = "lake-highlight";

export const setHighlightApi = (text: string, element: HTMLElement | null | undefined) => {
  if (!("highlights" in CSS)) {
    return;
  }

  if (element == null || isNullishOrEmpty(text)) {
    CSS.highlights.delete(highlightName);
    return;
  }

  const str = text.toLowerCase();
  const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const ranges: Range[] = [];

  let currentNode = treeWalker.nextNode();
  while (currentNode != null) {
    const text = currentNode.textContent?.toLowerCase() ?? "";
    let startPos = 0;
    while (startPos < text.length) {
      const index = text.indexOf(str, startPos);
      if (index === -1) {
        break;
      }
      const range = new Range();
      range.setStart(currentNode, index);
      range.setEnd(currentNode, index + str.length);
      ranges.push(range);
      startPos = index + str.length;
    }
    currentNode = treeWalker.nextNode();
  }

  if (ranges.length > 0) {
    CSS.highlights.set(highlightName, new Highlight(...ranges));
  } else {
    CSS.highlights.delete(highlightName);
  }

  return () => {
    CSS.highlights.delete(highlightName);
  };
};
