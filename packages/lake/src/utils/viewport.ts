import { Future } from "@swan-io/boxed";
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

// When using `node.scroll()` with smooth behavior, there isn't any event to detect when the scroll animation is finished
// We need this also with `ScrollView.scrollTo` (which just call the native node.scroll function)
// More info about why this workaround: https://stackoverflow.com/a/60001032
export const detectScrollAnimationEnd = (element: HTMLElement): Future<void> => {
  let lastScrollTop = element.scrollTop;
  let lastScrollLeft = element.scrollLeft;

  return Future.make<void>(resolve => {
    let frame: number | undefined;

    // We need to wait a bit before starting the loop because first requestAnimationFrame is called before the scroll animation starts
    const timeout = setTimeout(() => {
      const loop = () => {
        frame = requestAnimationFrame(() => {
          if (lastScrollTop !== element.scrollTop || lastScrollLeft !== element.scrollLeft) {
            lastScrollTop = element.scrollTop;
            lastScrollLeft = element.scrollLeft;
            loop();
          } else {
            resolve();
          }
        });
      };

      loop();
    }, 50);

    return () => {
      clearTimeout(timeout);
      if (frame != null) {
        cancelAnimationFrame(frame);
      }
    };
  });
};
