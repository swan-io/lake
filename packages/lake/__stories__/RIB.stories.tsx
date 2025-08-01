import { Meta } from "@storybook/react";
import { RIB } from "../../shared-business/src/components/RIB";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

export default {
  title: "Informations/RIB",
  component: RIB,
} as Meta<typeof RIB>;

const bankAddress = {
  name: "BNP PARIBAS",
  address: "16 BOULEVARD DES ITALIENS",
  zipCode: "75009",
  city: "PARIS",
  country: "FRANCE",
};

const accountHolderAddress = {
  name: "John Doe",
  address: "16 BOULEVARD DES ITALIENS",
  zipCode: "75009",
  city: "PARIS",
  country: "FRANCE",
};

export const Default = () => {
  return (
    <StoryBlock title="RIB">
      <StoryPart title="Default">
        <RIB
          version="v1"
          accountCountry="FRA"
          partnerColor="#0f6fde"
          partnerLogoUrl="https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png"
          iban="FR76 3000 1007 1600 0000 0000 123"
          bic="BNPAFRPPXXX"
          bank="BNP PARIBAS"
          agency="PARIS 16 ETOILE"
          bankNumber="00000000001"
          bankKey="12"
          bankAddress={bankAddress}
          accountHolderAddress={accountHolderAddress}
        />
      </StoryPart>

      <StoryPart title="Without logo">
        <RIB
          version="v1"
          accountCountry="FRA"
          partnerColor="#0f6fde"
          iban="FR76 3000 1007 1600 0000 0000 123"
          bic="BNPAFRPPXXX"
          bank="BNP PARIBAS"
          agency="PARIS 16 ETOILE"
          bankNumber="00000000001"
          bankKey="12"
          bankAddress={bankAddress}
          accountHolderAddress={accountHolderAddress}
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const AccountCountries = () => {
  return (
    <StoryBlock title="RIB by account country">
      <StoryPart title="France">
        <RIB
          version="v1"
          accountCountry="FRA"
          partnerColor="#0f6fde"
          iban="FR76 3000 1007 1600 0000 0000 123"
          bic="BNPAFRPPXXX"
          bank="BNP PARIBAS"
          agency="PARIS 16 ETOILE"
          bankNumber="00000000001"
          bankKey="12"
          bankAddress={bankAddress}
          accountHolderAddress={accountHolderAddress}
        />
      </StoryPart>

      <StoryPart title="Germany">
        <RIB
          version="v1"
          accountCountry="DEU"
          partnerColor="#0f6fde"
          iban="DE89 3704 0044 0532 0130 00"
          bic="COBADEFFXXX"
          bank="COMMERZBANK AG"
          accountNumber="37040044"
          bankAddress={bankAddress}
          accountHolderAddress={accountHolderAddress}
        />
      </StoryPart>

      <StoryPart title="Spain">
        <RIB
          version="v1"
          accountCountry="ESP"
          partnerColor="#0f6fde"
          iban="ES91 2100 0418 4502 0005 1332"
          bic="CAIXESBBXXX"
          bank="CAIXABANK"
          agency="BARCELONA"
          nationalCode="2100"
          bankNumber="0418"
          bankAddress={bankAddress}
          accountHolderAddress={accountHolderAddress}
        />
      </StoryPart>

      <StoryPart title="Italy">
        <RIB
          version="v1"
          accountCountry="ITA"
          partnerColor="#0f6fde"
          iban="IT 60 X 05428 11101 000000123456"
          bic="SWNBITM2"
          bank="05428"
          agency="11101"
          bankNumber="000000123456"
          bankAddress={bankAddress}
          accountHolderAddress={accountHolderAddress}
        />
      </StoryPart>

      <StoryPart title="Belgium">
        <RIB
          version="v1"
          accountCountry="BEL"
          partnerColor="#0f6fde"
          iban="BE 68 539 0075470 34"
          bic="AARBBEB1"
          bank="12345"
          agency="539"
          bankNumber="0075470"
          bankAddress={bankAddress}
          accountHolderAddress={accountHolderAddress}
        />
      </StoryPart>
    </StoryBlock>
  );
};
