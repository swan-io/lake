// Based on https://github.com/necolas/react-native-web/blob/0.19.12/packages/react-native-web/src/exports/Dimensions/index.js

export type WindowSize = {
  width: number;
  height: number;
};

const get = (): WindowSize => {
  const viewport = window.visualViewport;

  /**
   * iOS does not update viewport dimensions on keyboard open/close.
   * window.visualViewport(https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport)
   * is used instead of document.documentElement.clientHeight (which remains as a fallback)
   */
  if (viewport != null) {
    /**
     * We are multiplying by scale because height and width from visual viewport
     * also react to pinch zoom, and become smaller when zoomed. But it is not desired
     * behaviour, since originally documentElement client height and width were used,
     * and they do not react to pinch zoom.
     */
    return {
      width: Math.round(viewport.width * viewport.scale),
      height: Math.round(viewport.height * viewport.scale),
    };
  }

  const documentElement = window.document.documentElement;

  return {
    width: documentElement.clientWidth,
    height: documentElement.clientHeight,
  };
};

const callbacks = new Set<(value: WindowSize) => void>();

let currentSize: WindowSize = get();

const onResize = () => {
  currentSize = get();
  callbacks.forEach(callback => callback(currentSize));
};

export const windowSize = {
  get: () => currentSize,

  subscribe: (callback: (size: WindowSize) => void) => {
    callbacks.add(callback);

    return () => {
      callbacks.delete(callback);
    };
  },
};

if (window.visualViewport != null) {
  window.visualViewport.addEventListener("resize", onResize, false);
} else {
  window.addEventListener("resize", onResize, false);
}
