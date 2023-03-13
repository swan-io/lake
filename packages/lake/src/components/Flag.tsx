import { Lazy } from "@swan-io/boxed";
import { countries, CountryCCA3 } from "@swan-io/shared-business/src/constants/countries";
import { useEffect, useMemo, useState } from "react";
import { Svg, Use } from "./Svg";

type Props = {
  icon: CountryCCA3;
  width: number;
};

let loadedUrl: string | undefined;
const importFlags = Lazy(async () => {
  const { default: value } = await import("../assets/images/flags.svg");
  loadedUrl = value;
  return value;
});

const UNICODE_OFFSET = 127462 - 65;

export const Flag = ({ icon, width }: Props) => {
  const [url, setUrl] = useState(loadedUrl);

  useEffect(() => {
    if (loadedUrl == undefined) {
      void importFlags.get().then(setUrl);
    }
  }, []);

  const flag = useMemo(() => {
    const cca2 = countries.find(item => item.cca3 === icon)?.cca2;
    if (cca2 == null) {
      return null;
    }
    return (
      (UNICODE_OFFSET + cca2.charCodeAt(0)).toString(16) +
      "-" +
      (UNICODE_OFFSET + cca2.charCodeAt(1)).toString(16)
    );
  }, [icon]);

  return (
    <Svg
      viewBox="0 0 18 18"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        borderRadius: 2,
        width,
        height: width,
      }}
    >
      {url != null && flag != null ? <Use xlinkHref={`${url}#${flag}`} /> : null}
    </Svg>
  );
};
