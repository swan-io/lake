import { atom, useAtom } from "react-atomic-state";

// based on https://gist.github.com/ncou/3a0a1f89c8e22416d0d607f621a948a9
const createProgress = ({ duration, onEnd }: { duration: number; onEnd: () => void }) => {
  const callbacks = new Set<(value: number) => void>();

  let endDate = 0;
  let timerId = 0;

  const step = () => {
    const value = (endDate - Date.now()) / duration;
    callbacks.forEach(callback => callback(value));
    animationRequest = window.requestAnimationFrame(step);
  };

  let animationRequest = window.requestAnimationFrame(step);

  const start = () => {
    endDate = Date.now() + duration;

    timerId = window.setTimeout(() => {
      clear();
      onEnd();
    }, duration);
  };

  const reset = () => {
    window.clearTimeout(timerId);
    start();
  };

  const subscribe = (callback: (value: number) => void) => {
    callbacks.add(callback);

    return () => {
      callbacks.delete(callback);
    };
  };

  const clear = () => {
    document.removeEventListener("visibilitychange", onDocumentVisible);
    window.clearTimeout(timerId);
    window.cancelAnimationFrame(animationRequest);
  };

  const onDocumentVisible = () => {
    document.removeEventListener("visibilitychange", onDocumentVisible);
    reset();
  };

  if (document.hidden) {
    document.addEventListener("visibilitychange", onDocumentVisible);
  } else {
    reset();
  }

  return {
    clear,
    reset,
    subscribe,
  };
};

export type ToastProgress = ReturnType<typeof createProgress>;
export type ToastVariant = "success" | "info" | "warning" | "error";

type ToastContent = {
  variant: ToastVariant;
  title: string;
  description?: string;
  error?: unknown;
  autoClose?: boolean;
};

type Toast = {
  uid: string;
  variant: ToastVariant;
  title: string;
  description?: string;
  error?: unknown;
  progress?: ToastProgress;
};

const toasts = atom<Toast[]>([]);

export const useToasts = () => useAtom(toasts);

export const hideToast = (uid: string) => {
  const toast = toasts.get().find(toast => toast.uid === uid);

  if (toast != null) {
    toast.progress?.clear();
    toasts.set(toasts => toasts.filter(toast => toast.uid !== uid));
  }
};

let errorToRequestId = new WeakMap<WeakKey, string>();

export const registerErrorToRequestId = (value: WeakMap<WeakKey, string>) => {
  errorToRequestId = value;
};

export const getErrorToRequestId = () => {
  return errorToRequestId;
};

export const showToast = ({ variant, title, description, error, autoClose }: ToastContent) => {
  const uid = `${variant} - ${title} - ${description ?? ""}`;
  const toast = toasts.get().find(toast => toast.uid === uid);

  if (toast != null) {
    toast.progress?.reset();
    return uid;
  }

  // by default, only info and success toasts are auto-closing
  const shouldAutoClose = autoClose ?? (variant === "info" || variant === "success");

  const progress = shouldAutoClose
    ? createProgress({
        duration: 10000,
        onEnd: () => {
          hideToast(uid);
        },
      })
    : undefined;

  toasts.set(toasts => [{ uid, variant, title, description, error, progress }, ...toasts]);
  return uid;
};
