import { Meta } from "@storybook/react";
import { Future, Result } from "@swan-io/boxed";
import { UploadArea } from "@swan-io/shared-business/src/components/UploadArea";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import Card3dPreview from "../src/components/Card3dPreview";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeSlider } from "../src/components/LakeSlider";
import { LakeTextInput } from "../src/components/LakeTextInput";
import { RadioGroup } from "../src/components/RadioGroup";
import { Space } from "../src/components/Space";
import { deburr } from "../src/utils/string";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  canvasContainer: {
    height: 500,
  },
  fill: {
    flex: 1,
  },
});

export default {
  title: "Informations/Card3dPreview",
  component: Card3dPreview,
} as Meta<typeof Card3dPreview>;

const convertSvgFileToString = (file: File): Future<Result<string, string>> =>
  Future.make(resolve => {
    if (file.type !== "image/svg+xml") {
      resolve(Result.Error("BAD_FORMAT"));
      return;
    }

    const reader = new FileReader();

    reader.onload = event => {
      if (typeof event.target?.result !== "string") {
        resolve(Result.Error("NO_CONTENT"));
        return;
      }

      resolve(Result.Ok(event.target.result));
    };

    reader.readAsText(file);
  });

const convertStringToSvg = (content: string): Result<SVGElement, string> => {
  // deburr file content to avoid base64 encoding errors (for example with french accent)
  const cleanedContent = deburr(content);
  const parser = new DOMParser();
  const document = parser.parseFromString(cleanedContent, "image/svg+xml");

  if (!(document.children[0] instanceof SVGElement)) {
    return Result.Error("INVALID_SVG");
  }

  return Result.Ok(document.children[0]);
};

type CardConfig = {
  color: "Silver" | "Black";
  ownerName: string;
  svgLogo: SVGElement | null;
  logoScale: number;
};

type ConfigFormProps = {
  value: CardConfig;
  onChange: (config: CardConfig) => void;
};

const ConfigForm = ({ value, onChange }: ConfigFormProps) => {
  const [logoFile, setLogoFile] = useState<File>();

  const setName = (name: string) => {
    onChange({
      ...value,
      ownerName: name,
    });
  };

  const setColor = (color: CardConfig["color"]) => {
    onChange({
      ...value,
      color,
    });
  };

  const setLogoScale = (logoScale: number) => {
    onChange({
      ...value,
      logoScale,
    });
  };

  const handleLogo = (files: File[]) => {
    const file = files[0];
    if (!file) {
      return;
    }

    convertSvgFileToString(file)
      .mapOkToResult(convertStringToSvg)
      .onResolve(result => {
        result.match({
          Ok: svg => {
            setLogoFile(file);
            onChange({
              ...value,
              svgLogo: svg,
            });
          },
          Error: () => {
            console.error("Error while parsing svg file");
          },
        });
      });
  };

  return (
    <Box direction="row">
      <View style={styles.fill}>
        <LakeLabel
          label="Name"
          render={() => <LakeTextInput value={value.ownerName} onChangeText={setName} />}
        />

        <LakeLabel
          label="Color"
          render={() => (
            <RadioGroup
              value={value.color}
              onValueChange={setColor}
              items={[
                { name: "Silver", value: "Silver" },
                { name: "Black", value: "Black" },
              ]}
            />
          )}
        />
      </View>

      <Space width={32} />

      <View style={styles.fill}>
        <LakeLabel
          label="Logo"
          render={() => (
            <UploadArea
              accept={["image/svg+xml"]}
              value={logoFile}
              onDropAccepted={handleLogo}
              layout="horizontal"
              icon="arrow-download-filled"
            />
          )}
        />

        <Space height={16} />

        <LakeSlider
          min={0}
          max={1}
          label="Logo scale"
          step={0.01}
          value={value.logoScale}
          onChange={setLogoScale}
          unit=""
        />
      </View>
    </Box>
  );
};

export const Card = () => {
  const [config, setConfig] = useState<CardConfig>({
    color: "Silver",
    ownerName: "John Doe",
    svgLogo: null,
    logoScale: 1,
  });

  return (
    <StoryBlock title="Card">
      <StoryPart title="Default">
        <ConfigForm value={config} onChange={setConfig} />

        <View style={styles.canvasContainer}>
          <Card3dPreview
            assetsUrl="https://raw.githubusercontent.com/swan-io/lake/main/packages/lake/src/assets/3d-card"
            color={config.color}
            ownerName={config.ownerName}
            logo={config.svgLogo}
            logoScale={config.logoScale}
            cardNumber="1234 5678 9012 3456"
            expirationDate="12/24"
            cvv="123"
          />
        </View>
      </StoryPart>
    </StoryBlock>
  );
};

export const AutoRotation = () => {
  const [config, setConfig] = useState<CardConfig>({
    color: "Silver",
    ownerName: "John Doe",
    svgLogo: null,
    logoScale: 1,
  });

  return (
    <StoryBlock title="Card">
      <StoryPart title="With auto rotation">
        <ConfigForm value={config} onChange={setConfig} />

        <View style={styles.canvasContainer}>
          <Card3dPreview
            assetsUrl="https://raw.githubusercontent.com/swan-io/lake/main/packages/lake/src/assets/3d-card"
            autoRotationDuration={10}
            color={config.color}
            ownerName={config.ownerName}
            logo={config.svgLogo}
            logoScale={config.logoScale}
            cardNumber="1234 5678 9012 3456"
            expirationDate="12/24"
            cvv="123"
          />
        </View>
      </StoryPart>
    </StoryBlock>
  );
};
