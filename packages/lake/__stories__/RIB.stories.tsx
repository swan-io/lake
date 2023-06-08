import { Meta } from "@storybook/react";
import { RIBv1 } from "../../shared-business/src/components/RIB/RIBv1";
import { StoryBlock } from "./_StoriesComponents";

export default {
  title: "Informations/RIB",
  component: RIBv1,
} as Meta<typeof RIBv1>;

export const Colors = () => {
  return (
    <StoryBlock title="RIB">
      <RIBv1
        partnerColor="#0f6fde"
        partnerLogoUrl="https://s3.eu-west-1.amazonaws.com/data.master.oina.ws/7a90851b-40f8-479d-9e0e-86d12fb001b5/SANDBOX/logo-749a2fb5-230b-4ae6-98bd-65bdb3c987c9.png"
        iban="FR76 3000 1007 1600 0000 0000 123"
        bic="BNPAFRPPXXX"
        bank="BNP PARIBAS"
        agency="PARIS 16 ETOILE"
        bankNumber="00000000001"
        bankKey="12"
        bankAddress={{
          name: "BNP PARIBAS",
          address: "16 BOULEVARD DES ITALIENS",
          zipCode: "75009",
          city: "PARIS",
          country: "FRANCE",
        }}
        accountHolderAddress={{
          name: "John Doe",
          address: "16 BOULEVARD DES ITALIENS",
          zipCode: "75009",
          city: "PARIS",
          country: "FRANCE",
        }}
      />
    </StoryBlock>
  );
};
