import { forwardRef, memo, useEffect, useState } from "react";
import isEqual from "react-fast-compare";
import { Image, ImageProps } from "react-native";
import { Except } from "type-fest";
import { isNotNullish } from "../utils/nullish";

type Props = Except<ImageProps, "source"> & {
  maxWidth?: number;
  height: number;
  sourceUri: string;
};

export const AutoWidthImage = memo(
  forwardRef<Image, Props>(({ maxWidth, height, sourceUri, style, ...props }, forwardedRef) => {
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
      <Image ref={forwardedRef} source={{ uri: sourceUri }} style={[style, size]} {...props} />
    );
  }),
  isEqual,
);

AutoWidthImage.displayName = "AutoWidthImage";
