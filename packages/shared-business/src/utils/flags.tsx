import { Future, Result } from "@swan-io/boxed";
import { Request } from "@swan-io/request";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export class FlagClient<
  Flags extends Record<string, unknown>,
  Context extends Record<string, string | number | boolean>,
> {
  private readonly url: string;
  private context: Partial<Context>;
  private listeners: Array<(flags: Flags) => void> = [];

  constructor(url: string, initialContext: Partial<Context> = {}) {
    this.url = url;
    this.context = initialContext;
  }

  addListener(listener: (flags: Flags) => void) {
    this.listeners.push(listener);
  }

  removeListener(listener: (flags: Flags) => void) {
    const index = this.listeners.indexOf(listener);
    if (index !== -1) {
      this.listeners.splice(index, 1);
    }
  }

  setContext(context: Partial<Context>) {
    this.context = {
      ...this.context,
      ...context,
    };

    // reload flags when context changes
    this.fetchFlags();
  }

  fetchFlags(): Future<Result<Flags, unknown>> {
    const queryParams = new URLSearchParams(this.context as Record<string, string>).toString();

    return Request.make({
      url: `${this.url}?${queryParams}`,
      method: "GET",
      type: "json",
    })
      .mapOk(response => response.response.getOr({}) as Flags)
      .tapOk(flags => {
        this.listeners.forEach(listener => listener(flags));
      });
  }
}

export const createFlagsProvider = <
  Flags extends Record<string, unknown>,
  Context extends Record<string, string | number | boolean>,
>(
  client: FlagClient<Flags, Context>,
  flagDefaults: Flags,
) => {
  const FlagsContext = createContext<Flags | null>(null);

  return {
    FlagsProvider: ({ children, loader = null }: { children: ReactNode; loader?: ReactNode }) => {
      const [flags, setFlags] = useState<Flags | null>(null);

      // biome-ignore lint/correctness/useExhaustiveDependencies: we need to run this effect only once, when the component is mounted
      useEffect(() => {
        const listener = (flags: Flags) => {
          setFlags(flags);
        };

        client.addListener(listener);
        const future = client.fetchFlags().tapError(() => {
          // If fetching flags fails, we still want to provide the default flags to avoid breaking the app
          setFlags(flagDefaults);
        });

        return () => {
          client.removeListener(listener);
          future.cancel();
        };
      }, []);

      if (flags == null) {
        return loader;
      }

      return <FlagsContext.Provider value={flags}>{children}</FlagsContext.Provider>;
    },

    useFlag: <K extends keyof Flags>(flagName: K): Flags[K] => {
      const flags = useContext(FlagsContext);
      return flags?.[flagName] ?? flagDefaults[flagName];
    },
  };
};
