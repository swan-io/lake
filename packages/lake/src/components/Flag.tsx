import { Lazy } from "@swan-io/boxed";
import {
  CountryCCA2,
  CountryCCA3,
  getCCA2forCCA3,
} from "@swan-io/shared-business/src/constants/countries";
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
  width?: number;
} & (
  | {
      /**
       * @deprecated Use cca2 prop instead
       */
      icon: CountryCCA3;
    }
  | {
      cca2: CountryCCA2;
    }
);

export const Flag = (props: Props) => {
  const cca2 = "cca2" in props ? props.cca2 : getCCA2forCCA3(props.icon);
  const width = props.width ?? 18;

  const [url, setUrl] = useState(svgUrl);

  useEffect(() => {
    if (svgUrl == null) {
      void svgUrlGetter.get().then(setUrl);
    }
  }, []);

  const flag = useMemo(
    () =>
      `${(UNICODE_OFFSET + cca2.charCodeAt(0)).toString(16)}-${(UNICODE_OFFSET + cca2.charCodeAt(1)).toString(16)}`,
    [cca2],
  );

  return (
    <Svg viewBox="0 0 18 18" style={{ height: width, width }}>
      {url != null && flag != null ? <Use xlinkHref={`${url}#${flag}`} /> : null}
    </Svg>
  );
};
