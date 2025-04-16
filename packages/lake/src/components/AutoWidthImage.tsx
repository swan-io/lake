import { memo, Ref, useLayoutEffect, useState } from "react";
import { Image, ImageProps } from "react-native";
import { Except } from "type-fest";
import { isNotNullish } from "../utils/nullish";

type Props = Except<ImageProps, "source"> & {
  ref?: Ref<Image>;
  ariaLabel?: string;
  maxWidth?: number;
  height: number;
  sourceUri: string;
};

export const AutoWidthImage = memo(
  ({ ref, ariaLabel, maxWidth, height, sourceUri, onLoadEnd, style, ...props }: Props) => {
    const [{ fetching, size }, setState] = useState<{
      fetching: boolean;
      size: {
        height: number;
        width: number;
      };
    }>({
      fetching: true,
      size: { height, width: 0 },
    });

    useLayoutEffect(() => {
      Image.getSize(
        sourceUri,
        (fetchedWidth, fetchedHeight) => {
          const ratio = fetchedWidth / fetchedHeight;
          const width = ratio * height;

          const size =
            isNotNullish(maxWidth) && maxWidth < width
              ? { height: maxWidth / ratio, width: maxWidth }
              : { height, width };

          setState({ fetching: false, size });
        },
        () => {
          setState(({ size }) => ({ fetching: false, size }));
        },
      );
    }, [maxWidth, height, sourceUri]);

    return (
      <Image
        aria-label={ariaLabel}
        ref={ref}
        style={[style, size]}
        source={fetching ? null : sourceUri}
        onLoadEnd={() => {
          if (!fetching) {
            onLoadEnd?.();
          }
        }}
        {...props}
      />
    );
  },
);

AutoWidthImage.displayName = "AutoWidthImage";
