import { ReactNode, useCallback, useRef, useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextProps,
  View,
  ViewStyle,
  unstable_createElement,
} from "react-native";
import { match } from "ts-pattern";
import { v4 as uuid } from "uuid";
import { commonStyles } from "../constants/commonStyles";
import { ColorVariants, colors, fonts, spacings, texts } from "../constants/design";
import { isNotNullish } from "../utils/nullish";
import { Box } from "./Box";
import { LakeText } from "./LakeText";
import { Space, SpacingValue } from "./Space";

const styles = StyleSheet.create({
  container: {
    paddingTop: spacings[4],
  },
  label: {
    ...texts.medium,
    fontFamily: fonts.primary,
    color: colors.gray[700],
    display: "flex",
  },
  optionalLabel: {
    fontStyle: "italic",
  },
});

type LabelType = "form" | "formSmall" | "view" | "viewSmall" | "radioGroup";

type Props = {
  label: string;
  optionalLabel?: string;
  readOnlyColor?: string;
  color?: ColorVariants;
  type?: LabelType;
  extra?: () => ReactNode;
  help?: ReactNode;
  render: (id: string) => ReactNode;
  actions?: ReactNode;
  readOnly?: boolean;
  style?: StyleProp<ViewStyle>;
  description?: string;
};

const Label = (
  props: TextProps & { htmlFor: string; onClick: (event: React.MouseEvent) => void },
) => {
  return unstable_createElement("label", props);
};

const defaultLabelType: LabelType = "formSmall";

export const LakeLabel = ({
  label,
  optionalLabel,
  description,
  extra,
  readOnly = false,
  color = "current",
  readOnlyColor = colors[color].primary,
  type = defaultLabelType,
  help,
  render,
  actions,
  style,
}: Props) => {
  const [id] = useState(() => uuid());
  const containerRef = useRef<View>(null);

  const onClick = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      if (containerRef.current != null) {
        const container = containerRef.current as unknown as HTMLElement;
        const target = container.querySelector(`[id="${id}"]`) as HTMLElement;
        target?.focus();
      }
    },
    [id],
  );

  return (
    <Box
      style={[styles.container, style]}
      direction="row"
      alignItems="center"
      justifyContent="spaceBetween"
    >
      <View style={commonStyles.fill} ref={containerRef}>
        <Box direction="row" justifyContent="spaceBetween" alignItems="center">
          <Box direction="row" alignItems="center" shrink={1}>
            {type === "form" || type === "formSmall" || type === "radioGroup" ? (
              <Box shrink={1}>
                <Label
                  onClick={onClick}
                  htmlFor={id}
                  style={[styles.label, readOnly && { color: readOnlyColor }]}
                >
                  {label}

                  {optionalLabel != null && (
                    <LakeText color={colors.gray[400]} style={styles.optionalLabel}>
                      {` - ${optionalLabel}`}
                    </LakeText>
                  )}
                </Label>

                {description != null && (
                  <>
                    <LakeText variant="smallRegular">{description}</LakeText>
                    <Space height={8} />
                  </>
                )}
              </Box>
            ) : (
              <LakeText variant="medium" color={readOnlyColor} id={id}>
                {label}

                {optionalLabel != null && (
                  <LakeText color={colors.gray[400]} style={styles.optionalLabel}>
                    {` - ${optionalLabel}`}
                  </LakeText>
                )}
              </LakeText>
            )}

            {isNotNullish(extra) && extra()}
          </Box>

          {isNotNullish(help) && (
            <>
              <Space width={16} />

              {help}
            </>
          )}
        </Box>

        <Space
          height={match(type)
            .returnType<SpacingValue>()
            .with("formSmall", "viewSmall", () => 4)
            .with("form", "view", () => 8)
            .with("radioGroup", () => 12)
            .exhaustive()}
        />

        <View aria-labelledby={type === "view" || type === "viewSmall" ? id : undefined}>
          {render(id)}
        </View>
      </View>

      {isNotNullish(actions) && (
        <>
          <Space width={16} />

          {actions}
        </>
      )}
    </Box>
  );
};
