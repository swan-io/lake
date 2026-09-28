import { ReactNode, useCallback, useId } from "react";
import {
  StyleProp,
  StyleSheet,
  TextProps,
  unstable_createElement,
  View,
  ViewStyle,
} from "react-native";
import { match } from "ts-pattern";
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
  content: {
    alignSelf: "stretch",
    justifyContent: "flex-end",
  },
  topActions: {
    // matches LakeTextInput height, so actions are centered on the input, not on its error line
    minHeight: 40,
    justifyContent: "center",
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
  actionsAlign?: "content" | "labelAndContent";
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
  actionsAlign = "labelAndContent",
  style,
}: Props) => {
  const id = useId();
  const isFormLabel = type === "form" || type === "formSmall" || type === "radioGroup";

  const onClick = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      const target = document.getElementById(id);
      target?.focus();
    },
    [id],
  );

  const renderActions = () =>
    isNotNullish(actions) && (
      <>
        <Space width={16} />

        {actionsAlign === "content" && isFormLabel ? (
          <View style={styles.topActions}>{actions}</View>
        ) : (
          actions
        )}
      </>
    );

  return (
    <Box style={[styles.container, style]} direction="row" alignItems="center">
      <View style={commonStyles.fill}>
        <Box direction="row" justifyContent="spaceBetween" alignItems="center">
          <Box direction="row" alignItems="center" shrink={1}>
            {isFormLabel ? (
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
              <LakeText variant="medium" color={readOnlyColor}>
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

        <Box direction="row" alignItems={isFormLabel ? "start" : "center"}>
          <View style={[commonStyles.fill, styles.content]}>{render(id)}</View>

          {actionsAlign === "content" && renderActions()}
        </Box>
      </View>

      {actionsAlign === "labelAndContent" && renderActions()}
    </Box>
  );
};
