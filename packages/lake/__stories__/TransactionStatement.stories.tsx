import { Meta } from "@storybook/react";
import { TransactionStatement } from "@swan-io/shared-business/src/components/TransactionStatement";
import { invariantColors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Informations/TransactionStatement",
  component: TransactionStatement,
} as Meta<typeof TransactionStatement>;

export const Default = () => {
  return (
    <StoryBlock title="Transaction statement">
      <StoryPart title="Default">
        <TransactionStatement
          version="v1"
          partnerLogoUrl="https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png"
          generationDate="08/12/2024"
          executionDate="03/28/2024"
          type="InternalCreditTransferOut"
          amount={{ value: "12.00", currency: "EUR" }}
          targetTransferAmount={{ value: "10.25", currency: "GBP" }}
          exchangeRate={[
            { value: "1.00", currency: "EUR" },
            { value: "0.8548", currency: "GBP" },
          ]}
          fees={{ value: "1.00", currency: "EUR" }}
          label="Transfer to Alexandra ERZINGOVIVOVA"
          reference="12345-EIHJDKB-2849986398698-HLKHSFT"
          debtorName="Green co"
          debtorAccountNumber="FR7699999001001477659048183"
          debtorBankName="Swan"
          debtorBankIdentifier="SWNBFR22"
          creditorName="Yellow corp"
          creditorAccountNumber="FR7699999001001899407676183"
          creditorBankName="Acme Bank"
          creditorBankIdentifier="GNCFFRCQXXX"
          style={{ backgroundColor: invariantColors.white }}
        />
      </StoryPart>

      <StoryPart title="SctOut">
        <TransactionStatement
          version="v1"
          partnerLogoUrl="https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png"
          generationDate="08/12/2024"
          executionDate="03/28/2024"
          type="SepaCreditTransferOut"
          amount={{ value: "12.00", currency: "EUR" }}
          targetTransferAmount={{ value: "10.25", currency: "GBP" }}
          exchangeRate={[
            { value: "1.00", currency: "EUR" },
            { value: "0.8548", currency: "GBP" },
          ]}
          fees={{ value: "1.00", currency: "EUR" }}
          label="Transfer to Alexandra ERZINGOVIVOVA"
          reference="12345-EIHJDKB-2849986398698-HLKHSFT"
          debtorName="Green co"
          debtorAccountNumber="FR7699999001001477659048183"
          debtorBankName="Swan"
          debtorBankIdentifier="SWNBFR22"
          creditorName="Yellow corp"
          creditorAccountNumber="FR7699999001001899407676183"
          creditorBankName="Acme Bank"
          creditorBankIdentifier="GNCFFRCQXXX"
          style={{ backgroundColor: invariantColors.white }}
        />
      </StoryPart>
    </StoryBlock>
  );
};
