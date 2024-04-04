import { Suspense, SuspenseProps, createContext, useContext } from "react";

const SuspendableContext = createContext(false);

export const Suspendable = (props: SuspenseProps) => {
  return (
    <SuspendableContext.Provider value={true}>
      <Suspense {...props} />
    </SuspendableContext.Provider>
  );
};

export const useIsSuspendable = (): boolean => {
  return useContext(SuspendableContext);
};
