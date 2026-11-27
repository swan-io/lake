import { Grid } from "@swan-io/lake/src/components/Grid";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { MultiSelect, MultiSelectItem } from "@swan-io/lake/src/components/MultiSelect";
import { RadioGroup } from "@swan-io/lake/src/components/RadioGroup";
import { Space } from "@swan-io/lake/src/components/Space";
import { Tile } from "@swan-io/lake/src/components/Tile";
import { colors } from "@swan-io/lake/src/constants/design";
import { useForm } from "@swan-io/use-form";
import { match } from "ts-pattern";
import {
  FraudReportValidationError,
  validateNotInFuture,
} from "../../utils/fraudReport/validation";
import { t } from "../../utils/i18n";
import { InlineDatePicker } from "../InlineDatePicker";
import {
  FraudReportFooter,
  FraudReportStepProps,
  useFraudReportSmallLayout,
} from "./FraudReportLayout";

type Action = "Merchant" | "Police";

type Props = FraudReportStepProps<
  "isLostOrStolen" | "lostOrStolenNoticedAt" | "hasContactedMerchant" | "hasFiledPoliceComplaint"
> & {
  onPrevious: () => void;
  loading?: boolean;
};

export const CardDetailsStep = ({ values, onNext, onPrevious, loading }: Props) => {
  const small = useFraudReportSmallLayout();

  const { Field, FieldsListener, submitForm } = useForm<
    {
      isLostOrStolen: boolean | undefined;
      lostOrStolenNoticedAt: string | undefined;
      actions: Action[];
    },
    FraudReportValidationError
  >({
    isLostOrStolen: { initialValue: values.isLostOrStolen },
    lostOrStolenNoticedAt: {
      initialValue: values.lostOrStolenNoticedAt,
      validate: validateNotInFuture,
    },
    actions: {
      initialValue: [
        ...(values.hasContactedMerchant === true ? ["Merchant" as const] : []),
        ...(values.hasFiledPoliceComplaint === true ? ["Police" as const] : []),
      ],
    },
  });

  const lostOrStolenItems: { name: string; value: boolean }[] = [
    { name: t("common.yes"), value: true },
    { name: t("common.no"), value: false },
  ];

  const actionItems: MultiSelectItem<Action>[] = [
    { label: t("fraudReport.card.action.merchant"), value: "Merchant", group: "" },
    { label: t("fraudReport.card.action.police"), value: "Police", group: "" },
  ];

  const onPressNext = () =>
    submitForm({
      onSuccess: ({ isLostOrStolen, lostOrStolenNoticedAt, actions }) => {
        const selected = actions.getOr([]);

        onNext({
          isLostOrStolen: isLostOrStolen.toUndefined(),
          lostOrStolenNoticedAt: lostOrStolenNoticedAt.toUndefined(),
          hasContactedMerchant: selected.includes("Merchant") ? true : undefined,
          hasFiledPoliceComplaint: selected.includes("Police") ? true : undefined,
        });
      },
    });

  return (
    <>
      <Tile title={t("fraudReport.card.title")}>
        <Grid numColumns={small ? 1 : 2} horizontalSpace={24}>
          <Field name="isLostOrStolen">
            {({ value, onChange }) => (
              <LakeLabel
                type="radioGroup"
                label={t("fraudReport.card.lostOrStolenLabel")}
                optionalLabel={t("common.optional")}
                render={() => (
                  <RadioGroup
                    direction={small ? "column" : "row"}
                    items={lostOrStolenItems}
                    value={value}
                    onValueChange={onChange}
                  />
                )}
              />
            )}
          </Field>

          <FieldsListener names={["isLostOrStolen"]}>
            {({ isLostOrStolen }) =>
              isLostOrStolen.value === true ? (
                <Field name="lostOrStolenNoticedAt">
                  {({ value, error, onChange }) => (
                    <InlineDatePicker
                      label={t("fraudReport.card.noticedAtLabel")}
                      optionalLabel={t("common.optional")}
                      responsive={!small}
                      value={value}
                      error={match(error)
                        .with("InvalidDate", () => t("fraudReport.card.noticedAtInvalid"))
                        .with("DateInFuture", () => t("fraudReport.card.noticedAtInFuture"))
                        .otherwise(() => undefined)}
                      validate={() => undefined}
                      onValueChange={onChange}
                    />
                  )}
                </Field>
              ) : null
            }
          </FieldsListener>
        </Grid>

        <FieldsListener names={["isLostOrStolen"]}>
          {({ isLostOrStolen }) =>
            isLostOrStolen.value === true ? (
              <>
                <Space height={24} />

                <LakeText variant="smallRegular" color={colors.gray[500]}>
                  {t("fraudReport.card.blockCards")}
                </LakeText>
              </>
            ) : null
          }
        </FieldsListener>
      </Tile>

      <Space height={24} />

      <Tile title={t("fraudReport.card.actionsTitle")}>
        <Field name="actions">
          {({ value, onChange }) => (
            <LakeLabel
              label={t("fraudReport.card.actionsLabel")}
              optionalLabel={t("common.optional")}
              render={id => (
                <MultiSelect
                  id={id}
                  enableGroups={false}
                  placeholder={t("fraudReport.card.actionsPlaceholder")}
                  items={actionItems}
                  values={value}
                  onValueChange={onChange}
                />
              )}
            />
          )}
        </Field>
      </Tile>

      <FraudReportFooter onPrevious={onPrevious} onNext={onPressNext} loading={loading} />
    </>
  );
};
