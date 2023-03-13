import { isNotNullish } from "./nullish";
import { isSafari } from "./userAgent";

// Prevents Safari from zooming automatically on inputs, still allow user to zoom manually
export const preventSafariAutoZoomOnInputs = () => {
  if (isSafari) {
    const viewport = document.querySelector("meta[name=viewport]");
    const content = viewport?.getAttribute("content");

    if (isNotNullish(viewport) && isNotNullish(content)) {
      viewport.setAttribute("content", content + ", maximum-scale=1.0");
    }
  }
};
