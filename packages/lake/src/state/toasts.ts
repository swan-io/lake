import { atom, useAtom } from "react-atomic-state";
import { Animated, Easing } from "react-native";
import { ControllableTimeout, createControllableTimeout } from "../utils/timer";

export type ToastVariant = "success" | "info" | "warning" | "error";

type ToastContent = {
  variant: ToastVariant;
  title: string;
  description?: string;
  error?: Error;
  autoClose?: boolean;
};

type Toast = {
  uid: string;
  variant: ToastVariant;
  title: string;
  description?: string;
  error?: Error;
  progress?: Animated.Value;
  timeout?: ControllableTimeout;
};

const toasts = atom<Toast[]>([]);

export const useToasts = () => useAtom(toasts);

export const hideToast = (uid: string) => {
  const toast = toasts.get().find(toast => toast.uid === uid);

  if (!toast) {
    return;
  }

  toast.timeout?.clear();
  toast.progress?.stopAnimation();

  toasts.set(toasts => toasts.filter(toast => toast.uid !== uid));
};

export const showToast = ({ variant, title, description, error, autoClose }: ToastContent) => {
  const uid = `${variant} - ${title} - ${description ?? ""}`;

  const toast = toasts.get().find(toast => toast.uid === uid);

  if (toast != null) {
    if (toast.timeout && toast.progress) {
      toast.timeout.clear();

      Animated.timing(toast.progress, {
        duration: 100,
        easing: Easing.linear,
        toValue: 1,
        useNativeDriver: false,
      }).start(() => {
        toast.timeout?.reset();
      });
    }

    return uid;
  }

  // by default, only info and success toasts are auto-closing
  const isAutoClosingToast = autoClose ?? (variant === "info" || variant === "success");

  const progress = isAutoClosingToast ? new Animated.Value(1) : undefined;

  const timeout = progress
    ? createControllableTimeout({
        duration: 10000,
        onStart: duration => {
          Animated.timing(progress, {
            duration,
            easing: Easing.linear,
            toValue: 0,
            useNativeDriver: false,
          }).start();
        },
        onReset: duration => {
          Animated.timing(progress, {
            duration,
            easing: Easing.linear,
            toValue: 0,
            useNativeDriver: false,
          }).start();
        },
        onEnd: () => {
          hideToast(uid);
        },
      })
    : undefined;

  toasts.set(toasts => [{ uid, variant, title, description, error, progress, timeout }, ...toasts]);
  return uid;
};
