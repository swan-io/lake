import { Lazy } from "@swan-io/boxed";
import { CountryCCA3, getCCA2forCCA3 } from "@swan-io/shared-business/src/constants/countries";
import { useEffect, useMemo, useState } from "react";
import { Svg, Use } from "./Svg";

const UNICODE_OFFSET = 127462 - 65;

let svgUrl: string | undefined;

const svgUrlGetter = Lazy(async () => {
  const { default: value } = await import("../assets/images/flags.svg");
  svgUrl = value;
  return value;
});

type Props = {
  icon: CountryCCA3;
  width?: number;
};

export const Flag = ({ icon, width = 18 }: Props) => {
  const [url, setUrl] = useState(svgUrl);

  useEffect(() => {
    if (svgUrl == null) {
      void svgUrlGetter.get().then(setUrl);
    }
  }, []);

  const flag = useMemo(() => {
    const cca2 = getCCA2forCCA3(icon);
    return `${(UNICODE_OFFSET + cca2.charCodeAt(0)).toString(16)}-${(UNICODE_OFFSET + cca2.charCodeAt(1)).toString(16)}`;
  }, [icon]);

  return (
    <Svg viewBox="0 0 18 18" style={{ height: width, width }}>
      {url != null && flag != null ? <Use xlinkHref={`${url}#${flag}`} /> : null}
    </Svg>
  );
};
