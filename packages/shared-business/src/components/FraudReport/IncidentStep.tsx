import { Dict } from "@bloodyowl/boxed";
import { Grid } from "@swan-io/lake/src/components/Grid";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeSelect } from "@swan-io/lake/src/components/LakeSelect";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { RadioGroup } from "@swan-io/lake/src/components/RadioGroup";
import { Tile } from "@swan-io/lake/src/components/Tile";
import { useForm } from "@swan-io/use-form";
import { match } from "ts-pattern";
import type { FraudReason, FraudTypology } from "../../utils/fraudReport/types";
import {
  DESCRIPTION_MAX_LENGTH,
  FraudReportValidationError,
  validateDescription,
  validateNotInFuture,
  validateSelected,
} from "../../utils/fraudReport/validation";
import { t } from "../../utils/i18n";
import { InlineDatePicker } from "../InlineDatePicker";
import {
  FraudReportFooter,
  FraudReportStepProps,
  useFraudReportSmallLayout,
} from "./FraudReportLayout";

type Props = FraudReportStepProps<
  "reportedReason" | "reportedTypology" | "description" | "discoveredAt"
> & {
  onPrevious: () => void;
  loading?: boolean;
};

export const IncidentStep = ({ values, onNext, onPrevious, loading }: Props) => {
  const small = useFraudReportSmallLayout();

  const { Field, submitForm } = useForm<
    {
      reportedReason: FraudReason | undefined;
      reportedTypology: FraudTypology | undefined;
      description: string;
      discoveredAt: string | undefined;
    },
    FraudReportValidationError
  >({
    reportedReason: { initialValue: values.reportedReason, validate: validateSelected },
    description: { initialValue: values.description ?? "", validate: validateDescription },
    reportedTypology: { initialValue: values.reportedTypology, validate: validateSelected },
    discoveredAt: { initialValue: values.discoveredAt, validate: validateNotInFuture },
  });

  const reasonItems: { name: string; value: FraudReason }[] = [
    { name: t("common.yes"), value: "Manipulated" },
    { name: t("common.no"), value: "Unauthorized" },
  ];

  const typologyLabels: Record<FraudTypology, string> = {
    FakeAdvisor: t("fraudReport.incident.typology.FakeAdvisor"),
    ImpersonationOrPhishing: t("fraudReport.incident.typology.ImpersonationOrPhishing"),
    FakeWebsite: t("fraudReport.incident.typology.FakeWebsite"),
    FakeSupplierOrInvoice: t("fraudReport.incident.typology.FakeSupplierOrInvoice"),
    InvestmentScam: t("fraudReport.incident.typology.InvestmentScam"),
    RomanceScam: t("fraudReport.incident.typology.RomanceScam"),
    Other: t("fraudReport.incident.typology.Other"),
  };

  const typologyItems = Dict.entries(typologyLabels).map(([value, name]) => ({ name, value }));

  const onPressNext = () =>
    submitForm({
      onSuccess: ({ reportedReason, reportedTypology, description, discoveredAt }) =>
        onNext({
          reportedReason: reportedReason.toUndefined(),
          reportedTypology: reportedTypology.toUndefined(),
          description: description.toUndefined(),
          discoveredAt: discoveredAt.toUndefined(),
        }),
    });

  return (
    <>
      <Tile
        title={t("fraudReport.incident.title")}
        description={t("fraudReport.incident.description")}
      >
        <Field name="reportedReason">
          {({ value, error, onChange }) => (
            <LakeLabel
              type="radioGroup"
              label={t("fraudReport.incident.reasonLabel")}
              render={() => (
                <RadioGroup
                  direction={small ? "column" : "row"}
                  items={reasonItems}
                  value={value}
                  error={
                    error === "Required" ? t("fraudReport.incident.reasonRequired") : undefined
                  }
                  onValueChange={onChange}
                />
              )}
            />
          )}
        </Field>

        <Field name="description">
          {({ ref, value, error, onChange, onBlur }) => (
            <LakeLabel
              label={t("fraudReport.incident.whatHappenedLabel")}
              render={id => (
                <LakeTextInput
                  id={id}
                  ref={ref}
                  multiline={true}
                  placeholder={t("fraudReport.incident.whatHappenedPlaceholder")}
                  value={value}
                  error={match(error)
                    .with("Required", () => t("fraudReport.incident.whatHappenedRequired"))
                    .with("TooLong", () =>
                      t("fraudReport.incident.whatHappenedTooLong", {
                        max: DESCRIPTION_MAX_LENGTH,
                      }),
                    )
                    .otherwise(() => undefined)}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          )}
        </Field>

        <Grid numColumns={small ? 1 : 2} horizontalSpace={24}>
          <Field name="reportedTypology">
            {({ ref, value, error, onChange }) => (
              <LakeLabel
                label={t("fraudReport.incident.typologyLabel")}
                render={id => (
                  <LakeSelect
                    id={id}
                    ref={ref}
                    items={typologyItems}
                    value={value}
                    error={
                      error === "Required" ? t("fraudReport.incident.typologyRequired") : undefined
                    }
                    onValueChange={onChange}
                  />
                )}
              />
            )}
          </Field>

          <Field name="discoveredAt">
            {({ value, error, onChange }) => (
              <InlineDatePicker
                label={t("fraudReport.incident.noticedAtLabel")}
                optionalLabel={t("common.optional")}
                responsive={!small}
                value={value}
                error={match(error)
                  .with("InvalidDate", () => t("fraudReport.incident.noticedAtInvalid"))
                  .with("DateInFuture", () => t("fraudReport.incident.noticedAtInFuture"))
                  .otherwise(() => undefined)}
                validate={() => undefined}
                onValueChange={onChange}
              />
            )}
          </Field>
        </Grid>
      </Tile>

      <FraudReportFooter onPrevious={onPrevious} onNext={onPressNext} loading={loading} />
    </>
  );
};
