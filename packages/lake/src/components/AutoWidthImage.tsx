import { forwardRef, memo, useEffect, useState } from "react";
import { Image, ImageProps } from "react-native";
import { Except } from "type-fest";
import { isNotNullish } from "../utils/nullish";

type Props = Except<ImageProps, "source"> & {
  ariaLabel?: string;
  maxWidth?: number;
  height: number;
  sourceUri: string;
};

export const AutoWidthImage = memo(
  forwardRef<Image, Props>(
    ({ ariaLabel, maxWidth, height, sourceUri, style, ...props }, forwardedRef) => {
      const [size, setSize] = useState<{ height: number; width: number }>({
        height,
        width: 0,
      });

      useEffect(() => {
        Image.getSize(sourceUri, (fetchedWidth, fetchedHeight) => {
          const ratio = fetchedWidth / fetchedHeight;
          const width = ratio * height;

          if (isNotNullish(maxWidth) && maxWidth < width) {
            const height = maxWidth / ratio;
            setSize({ height, width: maxWidth });
          } else {
            setSize({ height, width });
          }
        });
      }, [maxWidth, height, sourceUri]);

      return (
        <Image
          aria-label={ariaLabel}
          ref={forwardedRef}
          source={{ uri: sourceUri }}
          style={[style, size]}
          {...props}
        />
      );
    },
  ),
);

AutoWidthImage.displayName = "AutoWidthImage";
