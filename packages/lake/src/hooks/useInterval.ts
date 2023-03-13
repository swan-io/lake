import { useEffect, useRef } from "react";

export const useInterval = (handler: (id: number) => void, timeout: number) => {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const id = window.setInterval(() => handlerRef.current(id), timeout);
    return () => window.clearInterval(id);
  }, [timeout]);
};
