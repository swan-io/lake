// https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
// https://github.com/getsentry/sentry-javascript/blob/7.56.0/packages/react/src/errorboundary.tsx

import { Component, ErrorInfo, ReactNode, isValidElement } from "react";
import { isNotNullish } from "../utils/nullish";

const isError = (value: unknown): value is Error => {
  const string = Object.prototype.toString.call(value);

  if (
    string === "[object Error]" ||
    string === "[object Exception]" ||
    string === "[object DOMException]"
  ) {
    return true;
  }

  try {
    return value instanceof Error;
  } catch {
    return false;
  }
};

const setCause = (error: Error, cause: Error): void => {
  const seen = new WeakMap<Error, boolean>();

  const recurse = (error: Error, cause: Error): void => {
    if (seen.has(error)) {
      return; // Prevent a stack overflow caused by a possible recursive loop
    }

    if (error.cause != null) {
      seen.set(error, true);
      return recurse(error.cause as Error, cause);
    }

    error.cause = cause;
  };

  recurse(error, cause);
};

type Props = {
  children: ReactNode;
  fallback: (data: { error: Error; resetError: () => void }) => ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
};

type State = {
  error: Error | null;
};

const initialState: State = {
  error: null,
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = initialState;

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError } = this.props;

    if (isError(error)) {
      const cause = new Error(error.message);
      cause.name = `ErrorBoundary ${cause.name}`;

      if (isNotNullish(errorInfo.componentStack)) {
        cause.stack = errorInfo.componentStack;
      }

      setCause(error, cause);
    }

    if (onError != null) {
      onError(error, errorInfo);
    }
  }

  resetError: () => void = () => {
    const { error } = this.state;

    if (error !== null) {
      this.setState(initialState);
    }
  };

  render() {
    const { children, fallback } = this.props;
    const { error } = this.state;

    if (error === null) {
      return children;
    }

    const element = fallback({ error, resetError: this.resetError });
    return isValidElement(element) ? element : null;
  }
}
