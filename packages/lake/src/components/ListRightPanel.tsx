import { Array, Option } from "@swan-io/boxed";
import { forwardRef, MutableRefObject } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { match } from "ts-pattern";
import { animations, spacings } from "../constants/design";
import { usePreviousValue } from "../hooks/usePreviousValue";
import { noop } from "../utils/function";
import { Box } from "./Box";
import { FocusTrapRef } from "./FocusTrap";
import { LakeButton } from "./LakeButton";
import { RightPanel } from "./RightPanel";
import { Space } from "./Space";
import { TransitionView } from "./TransitionView";

const styles = StyleSheet.create({
  details: {
    paddingBottom: spacings[24],
    paddingTop: spacings[12],
    flexGrow: 1,
  },
  detailsContents: {
    ...StyleSheet.absoluteFillObject,
  },
  detailsContainer: {
    flexGrow: 1,
  },
  content: {
    paddingHorizontal: spacings[24],
  },
  contentLarge: {
    paddingHorizontal: spacings[40],
  },
});

export const ListRightPanelContent = ({
  children,
  large,
  style,
}: {
  children: React.ReactNode;
  large: boolean;
  style?: StyleProp<ViewStyle>;
}) => {
  return <View style={[large ? styles.contentLarge : styles.content, style]}>{children}</View>;
};

type Props<T> = {
  items: T[];
  keyExtractor: (item: T) => string;
  activeId: string | null;
  onActiveIdChange: (id: string) => void;
  onClose: () => void;
  render: (item: T, large: boolean) => React.ReactNode;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
};

const ListRightPanel_ = forwardRef<FocusTrapRef, Props<unknown>>(
  (
    {
      items,
      keyExtractor,
      activeId,
      onActiveIdChange,
      onClose,
      render,
      closeLabel,
      previousLabel,
      nextLabel,
    },
    ref,
  ) => {
    const activeItem = items.find(item => keyExtractor(item) === activeId);
    // use `Array.getIndexBy` instead of `Array.findIndex` to avoid -1 value
    const activeItemIndex = Array.getIndexBy(
      items,
      item => keyExtractor(item) === activeId,
    ).toUndefined();

    const previousId = usePreviousValue(activeId);
    const previousItem = usePreviousValue(activeItem);
    const previousIndex = usePreviousValue(activeItemIndex);

    const newDetailDirection =
      typeof activeItemIndex === "number" && typeof previousIndex === "number"
        ? match({ activeItemIndex, previousIndex })
            .when(
              ({ activeItemIndex, previousIndex }) => activeItemIndex < previousIndex,
              () => animations.fadeAndSlideInFromTop,
            )
            .when(
              ({ activeItemIndex, previousIndex }) => activeItemIndex > previousIndex,
              () => animations.fadeAndSlideInFromBottom,
            )
            .otherwise(() => null)
        : null;

    const previousDetailDirection =
      typeof activeItemIndex === "number" && typeof previousIndex === "number"
        ? match({ activeItemIndex, previousIndex })
            .when(
              ({ activeItemIndex, previousIndex }) => activeItemIndex < previousIndex,
              () => animations.fadeAndSlideInFromBottom,
            )
            .when(
              ({ activeItemIndex, previousIndex }) => activeItemIndex > previousIndex,
              () => animations.fadeAndSlideInFromTop,
            )
            .otherwise(() => null)
        : null;

    return (
      <RightPanel ref={ref} visible={activeItem != null} onPressClose={onClose}>
        {({ large }) => (
          <View style={styles.details}>
            <Box
              direction="row"
              justifyContent="spaceBetween"
              style={large ? styles.contentLarge : styles.content}
            >
              <LakeButton
                mode="tertiary"
                icon="lake-close"
                accessibilityLabel={closeLabel}
                onPress={onClose}
              />

              <Box direction="row" justifyContent="spaceBetween">
                <LakeButton
                  mode="tertiary"
                  accessibilityLabel={previousLabel}
                  icon="arrow-left-regular"
                  disabled={activeItemIndex === 0}
                  onPress={() => {
                    if (typeof activeItemIndex === "number") {
                      Option.fromNullable(items[activeItemIndex - 1]).match({
                        Some: item => onActiveIdChange(keyExtractor(item)),
                        None: noop,
                      });
                    }
                  }}
                />

                <LakeButton
                  mode="tertiary"
                  accessibilityLabel={nextLabel}
                  icon="arrow-right-regular"
                  disabled={activeItemIndex === items.length - 1}
                  onPress={() => {
                    if (typeof activeItemIndex === "number") {
                      Option.fromNullable(items[activeItemIndex + 1]).match({
                        Some: item => onActiveIdChange(keyExtractor(item)),
                        None: noop,
                      });
                    }
                  }}
                />
              </Box>
            </Box>

            <Space height={12} />

            <View style={styles.detailsContainer}>
              {activeItem != null
                ? [
                    <TransitionView
                      {...newDetailDirection}
                      key={activeId}
                      style={styles.detailsContents}
                    >
                      {render(activeItem, large)}
                    </TransitionView>,

                    ...(previousItem != null && previousId !== activeId
                      ? [
                          <TransitionView
                            {...previousDetailDirection}
                            key={previousId}
                            style={styles.detailsContents}
                          >
                            {null}
                          </TransitionView>,
                        ]
                      : []),
                  ]
                : null}
            </View>
          </View>
        )}
      </RightPanel>
    );
  },
);

// @ts-expect-error this is the only way I found to use generic props with forwardRef
export const ListRightPanel: <T>(
  props: Props<T> & { ref?: MutableRefObject<FocusTrapRef | null> },
) => React.ReactElement = ListRightPanel_;
