import { Suspense, SuspenseProps, createContext, useContext, useEffect, useRef } from "react";

const SuspendableContext = createContext(false);

export const Suspendable = ({ ...props }: SuspenseProps) => {
  const isFirstRenderRef = useRef(true);
  useEffect(() => {
    isFirstRenderRef.current = false;
  }, []);

  return (
    <SuspendableContext.Provider value={isFirstRenderRef.current}>
      <Suspense {...props} />
    </SuspendableContext.Provider>
  );
};

export const useIsSuspendable = (): boolean => {
  return useContext(SuspendableContext);
};
