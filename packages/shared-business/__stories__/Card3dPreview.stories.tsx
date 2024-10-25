import { Meta } from "@storybook/react";
import { Future, Result } from "@swan-io/boxed";
import { Box } from "@swan-io/lake/src/components/Box";
import Card3dPreview, { Card3dAssetsUrls } from "@swan-io/lake/src/components/Card3dPreview";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeSlider } from "@swan-io/lake/src/components/LakeSlider";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { RadioGroup } from "@swan-io/lake/src/components/RadioGroup";
import { Space } from "@swan-io/lake/src/components/Space";
import { deburr } from "@swan-io/lake/src/utils/string";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import envNxUrl from "../src/assets/3d-card/environment/nx.png?url";
import envNyUrl from "../src/assets/3d-card/environment/ny.png?url";
import envNzUrl from "../src/assets/3d-card/environment/nz.png?url";
import envPxUrl from "../src/assets/3d-card/environment/px.png?url";
import envPyUrl from "../src/assets/3d-card/environment/py.png?url";
import envPzUrl from "../src/assets/3d-card/environment/pz.png?url";
import fontMaisonNeueBookUrl from "../src/assets/3d-card/model/MaisonNeue-Book.woff?url";
import fontMarkProRegularUrl from "../src/assets/3d-card/model/MarkPro-Regular.ttf?url";
import bandRoughnessUrl from "../src/assets/3d-card/model/band_roughness.jpg?url";
import cardGltfUrl from "../src/assets/3d-card/model/card.gltf?url";
import chipUrl from "../src/assets/3d-card/model/chip.jpg?url";
import colorBlackUrl from "../src/assets/3d-card/model/color_black.jpg?url";
import colorSilverUrl from "../src/assets/3d-card/model/color_silver.jpg?url";
import { FileInput } from "../src/components/FileInput";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const assetsUrls: Card3dAssetsUrls = {
  envNx: envNxUrl,
  envNy: envNyUrl,
  envNz: envNzUrl,
  envPx: envPxUrl,
  envPy: envPyUrl,
  envPz: envPzUrl,
  fontMaisonNeueBook: fontMaisonNeueBookUrl,
  fontMarkProRegular: fontMarkProRegularUrl,
  bandRoughness: bandRoughnessUrl,
  cardGltf: cardGltfUrl,
  chipTexture: chipUrl,
  colorBlack: colorBlackUrl,
  colorSilver: colorSilverUrl,
};

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
            <FileInput
              accept={["image/svg+xml"]}
              value={logoFile}
              onFiles={handleLogo}
              layout="horizontal"
              icon="arrow-download-filled"
            />
          )}
        />

        <Space height={16} />

        <LakeLabel
          label="Logo scale"
          render={() => (
            <LakeSlider
              min={0}
              max={1}
              step={0.01}
              value={value.logoScale}
              onChange={setLogoScale}
            />
          )}
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
            assetsUrls={assetsUrls}
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
            assetsUrls={assetsUrls}
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
