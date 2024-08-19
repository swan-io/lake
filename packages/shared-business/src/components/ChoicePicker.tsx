import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { LakeRadio } from "@swan-io/lake/src/components/LakeRadio";
import { Pressable } from "@swan-io/lake/src/components/Pressable";
import { ScrollView, ScrollViewRef } from "@swan-io/lake/src/components/ScrollView";
import { Space } from "@swan-io/lake/src/components/Space";
import { Tile } from "@swan-io/lake/src/components/Tile";
import { commonStyles } from "@swan-io/lake/src/constants/commonStyles";
import { breakpoints, negativeSpacings, spacings } from "@swan-io/lake/src/constants/design";
import { useResponsive } from "@swan-io/lake/src/hooks/useResponsive";
import { clampValue } from "@swan-io/lake/src/utils/math";
import { detectScrollAnimationEnd } from "@swan-io/lake/src/utils/viewport";
import { ReactNode, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { match } from "ts-pattern";
import { t } from "../utils/i18n";

const styles = StyleSheet.create({
  root: {
    alignSelf: "stretch",
    alignItems: "stretch",
    flexGrow: 1,
    overflow: "hidden",
    marginHorizontal: negativeSpacings[12],
  },
  scrollSnap: {
    scrollSnapType: "x mandatory",
  },
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "center",
  },
  mobileContainer: {
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    transitionProperty: "transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
  },
  item: {
    flexGrow: 0,
    flexBasis: "33.333%",
    maxWidth: 300,
    padding: spacings[12],
  },
  itemAnimation: {
    transform: "translateZ(0px)",
    animationKeyframes: {
      from: {
        opacity: 0,
        transform: "translateZ(0px) translateX(50px)",
      },
      to: {
        opacity: 1,
        transform: "translateZ(0px) translateX(0px)",
      },
    },
    animationDuration: "200ms",
    animationFillMode: "backwards",
    animationTimingFunction: "ease-in-out",
  },
  itemLarge: {
    flexBasis: "50%",
    maxWidth: "none",
  },
  itemSmallViewport: {
    width: "100%",
    flexBasis: "auto",
    maxWidth: "none",
    scrollSnapAlign: "center",
  },
  tileContents: {
    alignItems: "center",
    alignSelf: "stretch",
    flexGrow: 1,
  },
  tileRenderedContents: {
    alignItems: "center",
    alignSelf: "stretch",
    flexGrow: 1,
  },
  leftButton: {
    position: "absolute",
    top: "50%",
    left: negativeSpacings[24],
    transform: "translateY(-50%)",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderWidth: 1,
    borderLeftWidth: 0,
  },
  rightButton: {
    position: "absolute",
    top: "50%",
    right: negativeSpacings[24],
    transform: "translateY(-50%)",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderRightWidth: 0,
  },
});

type Props<T> = {
  items: T[];
  large?: boolean;
  renderItem: (value: T) => ReactNode;
  value?: T;
  getId?: (item: T) => unknown;
  onChange: (value: T) => void;
  disabled?: boolean;
  tile?: boolean;
};

const identity = <T,>(x: T) => x;

export const ChoicePicker = <T,>({
  tile = true,
  items,
  getId = identity,
  large = false,
  renderItem,
  value,
  disabled = false,
  onChange,
}: Props<T>) => {
  const containerRef = useRef<ScrollViewRef | null>(null);
  const { desktop } = useResponsive(breakpoints.medium);
  const [mobilePosition, setMobilePosition] = useState<"start" | "middle" | "end">("start");

  useEffect(() => {
    if (desktop) {
      return;
    }

    // auto scroll to selected value on mobile
    const scrollContainer = containerRef.current?.element;
    const index = items.findIndex(item => value === item);

    if (index !== -1 && scrollContainer instanceof HTMLDivElement) {
      const width = scrollContainer.offsetWidth;
      scrollContainer.scrollTo({ x: index * width, animated: false });
    }

    // if no value is selected, select first item
    if (value == null && items[0] != null) {
      onChange(items[0]);
    }
    // disable exhaustive-deps because we only want to run this effect only when screen size go from desktop to mobile
  }, [desktop]); // eslint-disable-line react-hooks/exhaustive-deps

  const onScroll = () => {
    // prevent scroll event when we change screen size from mobile to desktop
    if (desktop) {
      return;
    }

    const scrollContainer = containerRef.current?.element;
    if (scrollContainer instanceof HTMLDivElement) {
      const scrollLeft = scrollContainer.scrollLeft;
      const width = scrollContainer.offsetWidth;
      const index = clampValue(0, items.length - 1)(Math.round(scrollLeft / width));
      const item = items[index];
      if (item != null) {
        onChange(item);
      }

      match(index)
        .with(0, () => setMobilePosition("start"))
        .with(items.length - 1, () => setMobilePosition("end"))
        .otherwise(() => setMobilePosition("middle"));
    }
  };

  const onPressPrevious = () => {
    const scrollContainer = containerRef.current?.element;
    if (scrollContainer instanceof HTMLDivElement) {
      const scrollLeft = scrollContainer.scrollLeft;
      const width = scrollContainer.offsetWidth;
      const index = Math.round(scrollLeft / width);
      const previousIndex = Math.max(0, index - 1);

      // remove scroll snap during scroll animation to avoid weird behavior on older browsers
      scrollContainer.style.scrollSnapType = "none";
      containerRef.current?.scrollTo({ x: previousIndex * width, animated: true });
      detectScrollAnimationEnd(scrollContainer).onResolve(() => {
        // set back scroll snap
        // @ts-expect-error
        scrollContainer.style.scrollSnapType = null;
      });
    }
  };

  const onPressNext = () => {
    const scrollContainer = containerRef.current?.element;
    if (scrollContainer instanceof HTMLDivElement) {
      const scrollLeft = scrollContainer.scrollLeft;
      const width = scrollContainer.offsetWidth;
      const index = Math.round(scrollLeft / width);
      const nextIndex = Math.min(items.length - 1, index + 1);

      // remove scroll snap during scroll animation to avoid weird behavior on older browsers
      scrollContainer.style.scrollSnapType = "none";
      containerRef.current?.scrollTo({ x: nextIndex * width, animated: true });
      detectScrollAnimationEnd(scrollContainer).onResolve(() => {
        // set back scroll snap
        // @ts-expect-error
        scrollContainer.style.scrollSnapType = null;
      });
    }
  };

  return (
    <View>
      <View style={styles.root}>
        <ScrollView
          ref={containerRef}
          horizontal={!desktop}
          onScroll={onScroll}
          scrollEventThrottle={200}
          style={styles.scrollSnap}
          contentContainerStyle={[
            styles.container,
            !desktop && styles.mobileContainer,
            !desktop && { width: `${items.length * 100}%` },
          ]}
        >
          {items.map((item, index) => (
            <Pressable
              key={String(index)}
              disabled={disabled}
              style={[
                styles.item,
                disabled && commonStyles.disabled,
                desktop && styles.itemAnimation, // set enter animation only on desktop because it can break scroll snap
                desktop && { animationDelay: `${200 + 100 * index}ms` },
                large && styles.itemLarge,
                !desktop && styles.itemSmallViewport,
                !desktop && { width: `${100 / items.length}%` },
              ]}
              onPress={() => onChange(item)}
            >
              {({ hovered }) => {
                const tileContent = (
                  <View style={styles.tileContents}>
                    <View style={styles.tileRenderedContents}>{renderItem(item)}</View>

                    {desktop && (
                      <>
                        <Space height={24} />
                        <LakeRadio value={value != null && getId(item) === getId(value)} />
                      </>
                    )}
                  </View>
                );
                return tile ? (
                  <Tile
                    hovered={hovered}
                    selected={value != null && getId(item) === getId(value)}
                    flexGrow={1}
                  >
                    {tileContent}
                  </Tile>
                ) : (
                  tileContent
                );
              }}
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {!desktop && (
        <LakeButton
          icon="chevron-left-filled"
          mode="secondary"
          forceBackground={true}
          onPress={onPressPrevious}
          disabled={mobilePosition === "start" || disabled}
          style={styles.leftButton}
          ariaLabel={t("common.previous")}
        />
      )}

      {!desktop && (
        <LakeButton
          icon="chevron-right-filled"
          mode="secondary"
          forceBackground={true}
          onPress={onPressNext}
          disabled={mobilePosition === "end" || disabled}
          style={styles.rightButton}
          ariaLabel={t("common.next")}
        />
      )}
    </View>
  );
};
