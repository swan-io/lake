import { Lazy } from "@swan-io/boxed";
import { CountryCCA2 } from "@swan-io/shared-business/src/constants/countries";
import { useEffect, useMemo, useState } from "react";
import { match } from "ts-pattern";
import { getFlagGlyphName } from "../utils/string";
import { Svg, Use } from "./Svg";

const UNICODE_OFFSET = 127462 - 65;

let svgUrl: string | undefined;

const svgUrlGetter = Lazy(async () => {
  const { default: value } = await import("../assets/images/flags.svg");
  svgUrl = value;
  return value;
});

export type FlagCode = CountryCCA2 | "EU";

type Props = {
  code: FlagCode;
  width?: number;
};

export const Flag = (props: Props) => {
  const { code } = props;
  const width = props.width ?? 18;

  const [url, setUrl] = useState(svgUrl);

  useEffect(() => {
    if (svgUrl == null) {
      void svgUrlGetter.get().then(setUrl);
    }
  }, []);

  const flag = useMemo(() => {
    return match(code)
      .with("EU", () => getFlagGlyphName("🇪🇺"))
      .otherwise(() => {
        return `${(UNICODE_OFFSET + code.charCodeAt(0)).toString(16)}-${(UNICODE_OFFSET + code.charCodeAt(1)).toString(16)}`;
      });
  }, [code]);

  return (
    <Svg viewBox="0 0 18 18" style={{ height: width, width }}>
      {url != null && flag != null ? <Use xlinkHref={`${url}#${flag}`} /> : null}
    </Svg>
  );
};
