import { forwardRef, memo, useEffect, useState } from "react";
import { Image, ImageProps } from "react-native";
import { Except } from "type-fest";
import { isNotNullish } from "../utils/nullish";

type Size = {
  height: number;
  width: number;
};

type Props = Except<ImageProps, "source"> & {
  ariaLabel?: string;
  height: number;
  maxWidth?: number;
  sourceUri: string;
  onSizeComputed?: (size: Size) => void;
};

type State = {
  fetched: boolean;
  size: Size;
};

export const AutoWidthImage = memo(
  forwardRef<Image, Props>(
    ({ ariaLabel, maxWidth, height, sourceUri, onSizeComputed, style, ...props }, forwardedRef) => {
      const [state, setState] = useState<State>({
        fetched: false,
        size: { height, width: 0 },
      });

      useEffect(() => {
        Image.getSize(sourceUri, (fetchedWidth, fetchedHeight) => {
          const ratio = fetchedWidth / fetchedHeight;
          const width = ratio * height;

          const size =
            isNotNullish(maxWidth) && maxWidth < width
              ? { height: maxWidth / ratio, width: maxWidth }
              : { height, width };

          setState({ fetched: true, size });
        });
      }, [maxWidth, height, sourceUri]);

      useEffect(() => {
        if (state.fetched) {
          onSizeComputed?.(state.size);
        }
      }, [state]); // eslint-disable-line react-hooks/exhaustive-deps

      return (
        <Image
          aria-label={ariaLabel}
          ref={forwardedRef}
          source={{ uri: sourceUri }}
          style={[style, state.size]}
          {...props}
        />
      );
    },
  ),
);

AutoWidthImage.displayName = "AutoWidthImage";
