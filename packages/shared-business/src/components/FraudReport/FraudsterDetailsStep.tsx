import { Dict } from "@bloodyowl/boxed";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { MultiSelect, MultiSelectItem } from "@swan-io/lake/src/components/MultiSelect";
import { RadioGroup } from "@swan-io/lake/src/components/RadioGroup";
import { Tile } from "@swan-io/lake/src/components/Tile";
import { useForm } from "@swan-io/use-form";
import {
  getSharedInformationChoice,
  SharedInformationAnswer,
  SharedInformationItem,
  toSharedInformation,
} from "../../utils/fraudReport/fraudster";
import type { FraudsterChannel } from "../../utils/fraudReport/types";
import { t } from "../../utils/i18n";
import {
  FraudReportFooter,
  FraudReportStepProps,
  useFraudReportSmallLayout,
} from "./FraudReportLayout";

type Props = FraudReportStepProps<"fraudsterChannels" | "sharedInformationWithFraudster"> & {
  onPrevious: () => void;
  loading?: boolean;
};

export const FraudsterDetailsStep = ({ values, onNext, onPrevious, loading }: Props) => {
  const small = useFraudReportSmallLayout();
  const sharedInformation = getSharedInformationChoice(values.sharedInformationWithFraudster);

  const { Field, FieldsListener, submitForm } = useForm<{
    fraudsterChannels: FraudsterChannel[];
    sharedInformationAnswer: SharedInformationAnswer | undefined;
    sharedInformationItems: SharedInformationItem[];
  }>({
    fraudsterChannels: { initialValue: values.fraudsterChannels ?? [] },
    sharedInformationAnswer: { initialValue: sharedInformation.answer },
    sharedInformationItems: { initialValue: sharedInformation.items },
  });

  const channelLabels: Record<FraudsterChannel, string> = {
    Phone: t("fraudReport.fraudster.channel.Phone"),
    Sms: t("fraudReport.fraudster.channel.Sms"),
    Email: t("fraudReport.fraudster.channel.Email"),
    Website: t("fraudReport.fraudster.channel.Website"),
    Application: t("fraudReport.fraudster.channel.Application"),
    Other: t("fraudReport.fraudster.channel.Other"),
  };

  const sharedLabels: Record<SharedInformationItem, string> = {
    SwanPasscode: t("fraudReport.fraudster.shared.SwanPasscode"),
    VerificationCode: t("fraudReport.fraudster.shared.VerificationCode"),
    PartnerPassword: t("fraudReport.fraudster.shared.PartnerPassword"),
    CardDetails: t("fraudReport.fraudster.shared.CardDetails"),
    BankDetails: t("fraudReport.fraudster.shared.BankDetails"),
    PersonalInformation: t("fraudReport.fraudster.shared.PersonalInformation"),
    Other: t("fraudReport.fraudster.shared.Other"),
  };

  const channelItems: MultiSelectItem<FraudsterChannel>[] = Dict.entries(channelLabels).map(
    ([value, label]) => ({ label, value, group: "" }),
  );

  const sharedItems: MultiSelectItem<SharedInformationItem>[] = Dict.entries(sharedLabels).map(
    ([value, label]) => ({ label, value, group: "" }),
  );

  const answerItems: { name: string; value: SharedInformationAnswer }[] = [
    { name: t("common.yes"), value: "Yes" },
    { name: t("common.no"), value: "No" },
  ];

  const onPressNext = () =>
    submitForm({
      onSuccess: ({ fraudsterChannels, sharedInformationAnswer, sharedInformationItems }) => {
        const channels = fraudsterChannels.getOr([]);

        onNext({
          fraudsterChannels: channels.length > 0 ? channels : undefined,
          sharedInformationWithFraudster: toSharedInformation({
            answer: sharedInformationAnswer.toUndefined(),
            items: sharedInformationItems.getOr([]),
          }),
        });
      },
    });

  return (
    <>
      <Tile
        title={t("fraudReport.fraudster.title")}
        description={t("fraudReport.fraudster.description")}
      >
        <Field name="fraudsterChannels">
          {({ value, onChange }) => (
            <LakeLabel
              label={t("fraudReport.fraudster.channelLabel")}
              optionalLabel={t("common.optional")}
              render={id => (
                <MultiSelect
                  id={id}
                  enableGroups={false}
                  items={channelItems}
                  values={value}
                  onValueChange={onChange}
                />
              )}
            />
          )}
        </Field>

        <Field name="sharedInformationAnswer">
          {({ value, onChange }) => (
            <LakeLabel
              type="radioGroup"
              label={t("fraudReport.fraudster.sharedLabel")}
              optionalLabel={t("common.optional")}
              render={() => (
                <RadioGroup
                  direction={small ? "column" : "row"}
                  items={answerItems}
                  value={value}
                  onValueChange={onChange}
                />
              )}
            />
          )}
        </Field>

        <FieldsListener names={["sharedInformationAnswer"]}>
          {({ sharedInformationAnswer }) =>
            sharedInformationAnswer.value === "Yes" ? (
              <Field name="sharedInformationItems">
                {({ value, onChange }) => (
                  <LakeLabel
                    label={t("fraudReport.fraudster.sharedItemsLabel")}
                    optionalLabel={t("common.optional")}
                    render={id => (
                      <MultiSelect
                        id={id}
                        enableGroups={false}
                        items={sharedItems}
                        values={value}
                        onValueChange={onChange}
                      />
                    )}
                  />
                )}
              </Field>
            ) : null
          }
        </FieldsListener>
      </Tile>

      <FraudReportFooter onPrevious={onPrevious} onNext={onPressNext} loading={loading} />
    </>
  );
};
