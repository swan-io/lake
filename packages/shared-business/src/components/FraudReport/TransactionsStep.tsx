import { Box } from "@swan-io/lake/src/components/Box";
import { Cell, CopyableTextCell, HeaderCell, TextCell } from "@swan-io/lake/src/components/Cells";
import { EmptyView } from "@swan-io/lake/src/components/EmptyView";
import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { ColumnConfig, PlainListView } from "@swan-io/lake/src/components/PlainListView";
import { Space } from "@swan-io/lake/src/components/Space";
import { Tag } from "@swan-io/lake/src/components/Tag";
import { Tile, TileFullWidthContent } from "@swan-io/lake/src/components/Tile";
import { backgroundColor, colors } from "@swan-io/lake/src/constants/design";
import dayjs from "dayjs";
import { ReactNode, useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { match } from "ts-pattern";
import {
  getTransactionsTotal,
  removeDuplicateTransactions,
} from "../../utils/fraudReport/transactions";
import type {
  FraudReportTransaction,
  FraudReportTransactionType,
} from "../../utils/fraudReport/types";
import { formatCurrencySymbol, formatNestedMessage, locale, t } from "../../utils/i18n";
import {
  FraudReportFooter,
  FraudReportStepProps,
  useFraudReportSmallLayout,
} from "./FraudReportLayout";

export type FraudReportTransactionPickerProps = {
  visible: boolean;
  selected: FraudReportTransaction[];
  onConfirm: (transactions: FraudReportTransaction[]) => void;
  onClose: () => void;
};

type Props = FraudReportStepProps<"transactions"> & {
  onPrevious: () => void;
  loading?: boolean;
  renderPicker: (props: FraudReportTransactionPickerProps) => ReactNode;
};

type ExtraInfo = {
  disabled: boolean;
  onRemove: (id: string) => void;
  setRemoveButton: (id: string, element: View | null) => void;
};

const getPaymentMethodLabel = (type: FraudReportTransactionType) =>
  match(type)
    .with("CardOutDebit", () => t("fraudReport.transactions.paymentMethod.card"))
    .with("SepaCreditTransferOut", () =>
      t("fraudReport.transactions.paymentMethod.sepaCreditTransfer"),
    )
    .with("SepaInstantCreditTransferOut", () =>
      t("fraudReport.transactions.paymentMethod.sepaInstantCreditTransfer"),
    )
    .with("InternationalCreditTransferOut", () =>
      t("fraudReport.transactions.paymentMethod.internationalCreditTransfer"),
    )
    .with("InternalCreditTransferOut", () =>
      t("fraudReport.transactions.paymentMethod.internalCreditTransfer"),
    )
    .exhaustive();

const highlight = (chunks: ReactNode) => (
  <LakeText variant="medium" color={colors.current[500]}>
    {chunks}
  </LakeText>
);

const formatDate = ({ executionDate }: FraudReportTransaction) =>
  dayjs(executionDate).format(locale.dateFormat);

const formatAmount = ({ amount }: FraudReportTransaction) =>
  formatCurrencySymbol(Number(amount.value), amount.currency);

const removeColumn: ColumnConfig<FraudReportTransaction, ExtraInfo> = {
  id: "remove",
  width: 56,
  title: "",
  renderTitle: () => null,
  renderCell: ({ item, extraInfo: { disabled, onRemove, setRemoveButton } }) => (
    <Cell align="right">
      <LakeButton
        ref={element => setRemoveButton(item.id, element)}
        mode="tertiary"
        size="small"
        color="negative"
        icon="subtract-circle-regular"
        disabled={disabled}
        ariaLabel={t("fraudReport.transactions.remove", {
          counterparty: item.counterparty,
          amount: formatAmount(item),
          date: formatDate(item),
        })}
        onPress={() => onRemove(item.id)}
      />
    </Cell>
  ),
};

const columns: ColumnConfig<FraudReportTransaction, ExtraInfo>[] = [
  {
    id: "date",
    width: 120,
    title: t("fraudReport.transactions.date"),
    renderTitle: ({ title }) => <HeaderCell text={title} />,
    renderCell: ({ item }) => <TextCell text={formatDate(item)} />,
  },
  {
    id: "counterparty",
    width: "grow",
    title: t("fraudReport.transactions.paidTo"),
    renderTitle: ({ title }) => <HeaderCell text={title} />,
    renderCell: ({ item }) => <TextCell text={item.counterparty} />,
  },
  {
    id: "amount",
    width: 130,
    title: t("fraudReport.transactions.amount"),
    renderTitle: ({ title }) => <HeaderCell text={title} />,
    renderCell: ({ item }) => <TextCell text={formatAmount(item)} />,
  },
  {
    id: "paymentMethod",
    width: 240,
    title: t("fraudReport.transactions.paymentMethod"),
    renderTitle: ({ title }) => <HeaderCell text={title} />,
    renderCell: ({ item }) => (
      <Cell>
        <Tag color="gray">{getPaymentMethodLabel(item.type)}</Tag>
      </Cell>
    ),
  },
  {
    id: "transactionId",
    width: "grow",
    title: t("fraudReport.transactions.transactionId"),
    renderTitle: ({ title }) => <HeaderCell text={title} />,
    renderCell: ({ item }) => (
      <CopyableTextCell
        text={item.id}
        copyWording={t("copyButton.copyTooltip")}
        copiedWording={t("copyButton.copiedTooltip")}
      />
    ),
  },
  removeColumn,
];

const smallColumns: ColumnConfig<FraudReportTransaction, ExtraInfo>[] = [
  {
    id: "summary",
    width: "grow",
    title: "",
    renderTitle: () => null,
    renderCell: ({ item }) => (
      <Cell direction="column">
        <LakeText numberOfLines={1} color={colors.gray[700]}>
          {item.counterparty}
        </LakeText>

        <LakeText variant="medium" color={colors.gray[900]}>
          {formatAmount(item)}
        </LakeText>
      </Cell>
    ),
  },
  removeColumn,
];

export const TransactionsStep = ({ values, onNext, onPrevious, loading, renderPicker }: Props) => {
  const small = useFraudReportSmallLayout();
  const [transactions, setTransactions] = useState(values.transactions);
  const [pickerVisible, setPickerVisible] = useState(false);
  const removeButtons = useRef(new Map<string, View>());
  const selectButtonRef = useRef<View>(null);
  const [focusAfterRemove, setFocusAfterRemove] = useState<{ id: string | null }>();

  useEffect(() => {
    if (focusAfterRemove !== undefined) {
      const element =
        focusAfterRemove.id === null
          ? selectButtonRef.current
          : removeButtons.current.get(focusAfterRemove.id);

      (element as unknown as HTMLElement | null | undefined)?.focus();
    }
  }, [focusAfterRemove]);

  const removeTransaction = (id: string) => {
    const index = transactions.findIndex(item => item.id === id);
    const next = transactions[index + 1] ?? transactions[index - 1];
    setFocusAfterRemove({ id: next?.id ?? null });
    setTransactions(transactions.filter(item => item.id !== id));
  };

  const total = getTransactionsTotal(transactions);
  const empty = transactions.length === 0;

  const selectButton = (
    <LakeButton
      ref={selectButtonRef}
      size={small ? "large" : "small"}
      grow={small}
      mode="secondary"
      icon="add-circle-regular"
      disabled={loading}
      onPress={() => setPickerVisible(true)}
    >
      {t("fraudReport.transactions.select")}
    </LakeButton>
  );

  return (
    <>
      <Tile
        title={t("fraudReport.transactions.title")}
        description={t("fraudReport.transactions.description")}
      >
        <Box direction={small ? "column" : "row"}>
          <LakeText color={colors.gray[700]}>
            {formatNestedMessage("fraudReport.transactions.total", {
              amount: formatCurrencySymbol(total.value, total.currency),
              highlight,
            })}
          </LakeText>

          <Space width={32} height={8} />

          <LakeText color={colors.gray[700]}>
            {formatNestedMessage("fraudReport.transactions.selectedCount", {
              count: transactions.length,
              highlight,
            })}
          </LakeText>
        </Box>
      </Tile>

      <Space height={24} />

      <Tile
        title={
          <>
            {t("fraudReport.transactions.listTitle")}
            <Space width={8} />
            <Tag color={empty ? "negative" : "gray"}>{String(transactions.length)}</Tag>
          </>
        }
        headerEnd={small ? undefined : selectButton}
      >
        {empty ? (
          <EmptyView
            icon="lake-inbox-empty"
            borderedIcon={true}
            title={t("fraudReport.transactions.emptyTitle")}
            subtitle={small ? undefined : t("fraudReport.transactions.emptySubtitle")}
          />
        ) : (
          <TileFullWidthContent>
            <PlainListView
              data={transactions}
              keyExtractor={({ id }) => id}
              extraInfo={{
                disabled: loading === true,
                onRemove: removeTransaction,
                setRemoveButton: (id, element) => {
                  if (element === null) {
                    removeButtons.current.delete(id);
                  } else {
                    removeButtons.current.set(id, element);
                  }
                },
              }}
              columns={columns}
              smallColumns={smallColumns}
              breakpoint={small ? Number.POSITIVE_INFINITY : 0}
              withoutScroll={true}
              headerHeight={48}
              rowHeight={small ? 72 : 56}
              groupHeaderHeight={48}
              headerBackgroundColor={backgroundColor.accented}
            />
          </TileFullWidthContent>
        )}

        {small ? (
          <>
            <Space height={24} />
            {selectButton}
          </>
        ) : null}
      </Tile>

      {renderPicker({
        visible: pickerVisible,
        selected: transactions,
        onConfirm: selected => {
          setTransactions(removeDuplicateTransactions(selected));
          setPickerVisible(false);
        },
        onClose: () => setPickerVisible(false),
      })}

      <FraudReportFooter
        onPrevious={onPrevious}
        onNext={() => onNext({ transactions })}
        loading={loading}
        nextDisabled={empty}
      />
    </>
  );
};
