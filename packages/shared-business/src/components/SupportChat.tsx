import { Array, Deferred, Dict, Option } from "@swan-io/boxed";
import { ReactNode, useCallback, useEffect } from "react";

const keys = {
  "end-user": "275d1c72-3760-4303-a7f0-806f5266a251",
  partner: "7a1d4c9f-9d4f-493d-8458-1e34f4a6b5ef",
};

export type AdditionalInfo = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  userId?: string;
  onboardingId?: string;
  membershipId?: string;
  environment?: string;
  projectName?: string;
};

type Props = {
  accentColor?: string;
  children: (props: { onPressShow: () => void }) => ReactNode;
  type: keyof typeof keys;
  additionalInfo: AdditionalInfo;
};

const zendeskFieldMapping = {
  phoneNumber: 5607378510109,
  userId: 5140675351581,
  email: "email",
  onboardingId: 5138993599517,
  membershipId: 5140686247581,
  environment: 5139163414173,
};

declare function zE(
  api: string,
  command: string,
  callbackOrOptions?: { [key: string]: unknown } | (() => void),
): void;

const [zendeskApi, setZendeskApi] = Deferred.make();

export const SupportChat = ({ children, accentColor, type, additionalInfo }: Props) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies(zE):
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "ze-snippet";
    script.src = `https://static.zdassets.com/ekr/snippet.js?key=${keys[type]}`;
    document.body.append(script);
    script.addEventListener("load", () => {
      const intervalId = setInterval(() => {
        if (typeof zE !== "undefined") {
          setZendeskApi(zE);
          clearInterval(intervalId);
        }
      });
    });
    return () => {
      script.remove();
    };
  }, [type]);

  useEffect(() => {
    // @ts-expect-error
    window.zESettings = {
      color: { theme: accentColor ?? "#26232f" },
    };
  }, [accentColor]);

  // biome-ignore lint/correctness/useExhaustiveDependencies(zE):
  useEffect(() => {
    const { firstName, lastName, email, projectName, ...fieldInfos } = additionalInfo;
    const values = Dict.entries({ ...fieldInfos, email });

    zendeskApi.onResolve(() => {
      try {
        zE("webWidget", "updateSettings", {
          color: { theme: accentColor ?? "#26232f" },
          webWidget: {
            contactForm: {
              fields: Array.filterMap(values, ([key, value]) =>
                value != null
                  ? Option.Some({
                      id: zendeskFieldMapping[key],
                      prefill: {
                        "*":
                          key === "environment" ? (value === "Live" ? "live" : "sandbox") : value,
                      },
                    })
                  : Option.None(),
              ),
            },
          },
        });
        zE("webWidget", "hide");
        zE("webWidget:on", "close", () => {
          zE("webWidget", "hide");
        });
        if (firstName != null && lastName != null && email != null) {
          zE("webWidget", "identify", {
            name: `${firstName} ${lastName}`,
            email,
            ...(projectName != null ? { organization: projectName } : null),
          });
        }
      } catch {
        // nothing
      }
    });
  }, [accentColor, additionalInfo]);

  // biome-ignore lint/correctness/useExhaustiveDependencies(zE):
  const onPressShow = useCallback(() => {
    try {
      zE("webWidget", "show");
      zE("webWidget", "open");
    } catch {
      // nothing
    }
  }, []);

  return children({ onPressShow });
};
