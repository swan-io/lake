import { LakeAlert } from "@swan-io/lake/src/components/LakeAlert";
import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { useBoolean } from "@swan-io/lake/src/hooks/useBoolean";
import { isNotNullish } from "@swan-io/lake/src/utils/nullish";
import { ComponentProps, ReactNode } from "react";
import { t } from "../utils/i18n";

type CollapsibleLakeAlertProps = ComponentProps<typeof LakeAlert> & {
  showMoreLabel?: string;
  showLessLabel?: string;
  initialCollapsed?: boolean;
  children?: ReactNode;
};

export const CollapsibleLakeAlert = ({
  showMoreLabel = t("common.showMore"),
  showLessLabel = t("common.showLess"),
  initialCollapsed = false,
  children,
  ...rest
}: CollapsibleLakeAlertProps) => {
  const [visible, { toggle }] = useBoolean(initialCollapsed);

  return (
    <LakeAlert
      anchored={true}
      {...rest}
      callToAction={
        isNotNullish(children) ? (
          <LakeButton onPress={toggle} mode="tertiary" size="small">
            {visible ? showLessLabel : showMoreLabel}
          </LakeButton>
        ) : null
      }
    >
      {visible ? children : null}
    </LakeAlert>
  );
};
