import { Environment, OrbitControls, Text, useGLTF, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { forwardRef, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { match } from "ts-pattern";
import envNxUrl from "../assets/3d-card/environment/nx.png?url";
import envNyUrl from "../assets/3d-card/environment/ny.png?url";
import envNzUrl from "../assets/3d-card/environment/nz.png?url";
import envPxUrl from "../assets/3d-card/environment/px.png?url";
import envPyUrl from "../assets/3d-card/environment/py.png?url";
import envPzUrl from "../assets/3d-card/environment/pz.png?url";
import fontMaisonNeueBookUrl from "../assets/3d-card/model/MaisonNeue-Book.woff?url";
import fontMarkProRegularUrl from "../assets/3d-card/model/MarkPro-Regular.ttf?url";
import bandRoughnessUrl from "../assets/3d-card/model/band_roughness.jpg?url";
import cardGltfUrl from "../assets/3d-card/model/card.gltf?url";
import chipUrl from "../assets/3d-card/model/chip.jpg?url";
import colorBlackUrl from "../assets/3d-card/model/color_black.jpg?url";
import colorSilverUrl from "../assets/3d-card/model/color_silver.jpg?url";
import shinyColorFragmentShader from "../assets/3d-card/shaders/shinyColorFragment.glsl?raw";
import { isNotNullish, isNullish } from "../utils/nullish";
import { createSvgImage, getMonochromeSvg } from "../utils/svg";

/*
This Module exports 2 components:
- default export: A react-three-fiber scene which can be integrated in any react project
(We use default export to be able to use React.lazy to load this component asynchronously without impacting bundle size)
- Card component: which can be use for developers who already have a react-three-fiber scene or want to create there own scene

Here are some details about choices made for this components:
:one: Textures
Textures aren't integrated in gltf export because it will force all developers to put texture files in their public folder.
By using ?url import and `useTexture` hook, Vite will put textures in dist folder for all developers who use this component.

:two: Logo integration
There is an SVGLoader for threejs but it doesn't support all svg features.
So to be sure to support all svg features, we transform the SVG into Image element to create a texture.
And this texture is used as an alpha map on a plane.

:three: Mastercard shiny text on back of card
To reproduce the shiny effect on the back of the card, we inject a custom shader in rainbow_mastercard material.
This custom shader chunk change the diffuse color depending on camera position.
*/

const ENV_MAP_INTENSITY = 3;
const CARD_WIDTH = 8.56;
const CARD_HEIGHT = 5.4;
const FRONT_TEXT_POSITION = 0.04;
const BACK_TEXT_POSITION = -FRONT_TEXT_POSITION;
const LOGO_MARGIN_TOP = 0.3;
const LOGO_MARGIN_RIGHT = 0.3;
const LOGO_MAX_WIDTH = 5; // in cm
const LOGO_MAX_HEIGHT = 1; // in cm

type CardParams = {
  ownerName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  color: "Silver" | "Black";
  logo: SVGElement | null;
  logoScale: number;
  onSvgError?: (code: string) => void;
};

const computeCardLogoSize = (logoSize: {
  width: number;
  height: number;
}): { width: number; height: number } => {
  const logoRatio = logoSize.width / logoSize.height;
  const cardSpaceRatio = LOGO_MAX_WIDTH / LOGO_MAX_HEIGHT;

  // if logo is wider than available space
  // logo will have the same width than available space
  if (logoRatio >= cardSpaceRatio) {
    const width = LOGO_MAX_WIDTH;
    const height = width / logoRatio;
    return { width, height };
  } else {
    // if logo is higher than available space
    // logo will have the same height than available space
    const height = LOGO_MAX_HEIGHT;
    const width = height * logoRatio;
    return { width, height };
  }
};

type Props = CardParams & {
  autoRotationDuration?: number; // duration for a full rotation in seconds
};

// Use export default for React.lazy
export default (props: Props) => {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      <OrbitControls enablePan={false} enableZoom={false} />
      <CardScene {...props} />
    </Canvas>
  );
};

const CardScene = ({ autoRotationDuration, ...props }: Props) => {
  const card = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (autoRotationDuration != null && card.current != null) {
      card.current.rotation.y = (clock.getElapsedTime() / autoRotationDuration) * Math.PI * 2;
    }
  });

  return (
    <>
      <ambientLight color={0xffffff} intensity={1} />
      <pointLight intensity={0.2} decay={2} position={[-10, -10, -21]} />
      <pointLight intensity={0.2} decay={2} position={[10, 10, 21]} />
      <Environment files={[envPxUrl, envNxUrl, envPyUrl, envNyUrl, envPzUrl, envNzUrl]} />
      <Card ref={card} {...props} />
    </>
  );
};

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
And adapted to use custom props
*/

type CardGLTFResult = GLTF & {
  nodes: {
    card: THREE.Mesh;
    black_band: THREE.Mesh;
    chip: THREE.Mesh;
    chip_pattern: THREE.Mesh;
    mc_center: THREE.Mesh;
    mc_left: THREE.Mesh;
    mc_right: THREE.Mesh;
    metal_circle: THREE.Mesh;
    metal_circle001: THREE.Mesh;
    metal_circle002: THREE.Mesh;
    metal_mastercard: THREE.Mesh;
  };
  materials: {
    card: THREE.MeshStandardMaterial;
    black_band: THREE.MeshStandardMaterial;
    chip: THREE.MeshStandardMaterial;
    chip_pattern: THREE.MeshStandardMaterial;
    mastercard_orange: THREE.MeshStandardMaterial;
    mastercard_red: THREE.MeshStandardMaterial;
    mastercard_yellow: THREE.MeshStandardMaterial;
    rainbow: THREE.MeshStandardMaterial;
    rainbow_rough: THREE.MeshStandardMaterial;
    rainbow_mastercard: THREE.MeshStandardMaterial;
  };
};

type CardProps = JSX.IntrinsicElements["group"] & CardParams;

// Set color space to sRGB for textures
const setTextureColorSpace = (texture: THREE.Texture | THREE.Texture[]) => {
  if (!Array.isArray(texture)) {
    texture.colorSpace = THREE.SRGBColorSpace;
  }
};

export const Card = forwardRef<THREE.Group, CardProps>(
  (
    { ownerName, cardNumber, expirationDate, cvv, color, logo, logoScale, onSvgError, ...props },
    ref,
  ) => {
    const { nodes, materials } = useGLTF(cardGltfUrl) as CardGLTFResult;
    const [logoData, setLogoData] = useState<{
      size: [number, number];
      alphaMap: THREE.Texture;
    } | null>(null);

    const silverTexture = useTexture(colorSilverUrl, setTextureColorSpace);
    const blackTexture = useTexture(colorBlackUrl, setTextureColorSpace);
    const chipTexture = useTexture(chipUrl, setTextureColorSpace);
    const bandRoughnessTexture = useTexture(bandRoughnessUrl); // keep default color space because it's grayscale

    // Set environment map intensity for all materials
    useEffect(() => {
      Object.values(materials).forEach(material => {
        material.envMapIntensity = ENV_MAP_INTENSITY;
      });
    }, [materials]);

    // Set rainbow mastercard text custom fragment shader
    useEffect(() => {
      materials.rainbow_mastercard.onBeforeCompile = shader => {
        shader.fragmentShader = shader.fragmentShader.replace(
          "#include <color_fragment>",
          shinyColorFragmentShader,
        );
      };
    }, [materials.rainbow_mastercard]);

    // Set band roughness and chip texture
    useEffect(() => {
      materials.black_band.roughness = 0.8;
      materials.black_band.roughnessMap = bandRoughnessTexture;
      materials.chip.map = chipTexture;
    }, [materials.black_band, materials.chip, bandRoughnessTexture, chipTexture]);

    // Set color texture
    useEffect(() => {
      match(color)
        .with("Silver", () => {
          materials.card.map = silverTexture;
        })
        .with("Black", () => {
          materials.card.map = blackTexture;
        })
        .exhaustive();
    }, [color, materials.card, silverTexture, blackTexture]);

    // this avoid to have onSvgError as dependency of the effect below which should run only on logo change
    const handleSvgError = useRef(onSvgError);
    useEffect(() => {
      handleSvgError.current = onSvgError;
    }, [onSvgError]);

    // Handle logo
    useEffect(() => {
      if (isNullish(logo)) {
        setLogoData(null);
        return;
      }

      // We transform the logo to white to be able to use it as alpha map
      const whiteLogo = getMonochromeSvg(logo, "white");
      // Convert to Image element to be able to use it as texture
      const image = createSvgImage(whiteLogo);

      if (image.isError()) {
        handleSvgError.current?.(image.getError());
        return;
      }

      // Compute logo size depending on constraints
      const { width: logoWidth, height: logoHeight } = computeCardLogoSize(image.get());
      const alphaMap = new THREE.Texture(image.get());
      alphaMap.needsUpdate = true;

      setLogoData({
        size: [logoWidth, logoHeight],
        alphaMap,
      });
    }, [logo]);

    const mainTextMaterial = (
      <meshStandardMaterial
        color={match(color)
          .with("Silver", () => 0x000000)
          .with("Black", () => 0xeeeeee)
          .exhaustive()}
        metalness={0.1}
        roughness={0.55}
        envMapIntensity={ENV_MAP_INTENSITY}
      />
    );

    const secondaryTextMaterial = (
      <meshStandardMaterial
        color={0x666666}
        metalness={0.1}
        roughness={0.55}
        envMapIntensity={ENV_MAP_INTENSITY}
      />
    );

    return (
      <group ref={ref} {...props} dispose={null}>
        <mesh geometry={nodes.card.geometry} material={materials.card}>
          {/* Front face text */}
          <group position={[0, 0, FRONT_TEXT_POSITION]}>
            {/* Card owner name */}
            <Text
              font={fontMaisonNeueBookUrl}
              fontSize={0.2}
              anchorX="left"
              anchorY={"bottom"}
              position={[-3.4, -1.95, 0]}
            >
              {ownerName}
              {mainTextMaterial}
            </Text>

            {/* TM next to master card logo */}
            <Text
              font={fontMarkProRegularUrl}
              fontSize={0.03}
              anchorX="left"
              anchorY={"bottom"}
              position={[3.85, -2.15, 0]}
            >
              TM
              {mainTextMaterial}
            </Text>
          </group>

          {/* Back face text */}
          <group position={[0, 0, BACK_TEXT_POSITION]}>
            {/* Support address */}
            <Text
              font={fontMarkProRegularUrl}
              anchorX="left"
              anchorY={"bottom"}
              fontSize={0.12}
              rotation={[0, Math.PI, 0]}
              position={[4, 2.38, 0]}
            >
              support@swan.io
              {secondaryTextMaterial}
            </Text>

            {/* Idemia */}
            <Text
              font={fontMarkProRegularUrl}
              anchorX="right"
              anchorY={"bottom"}
              fontSize={0.12}
              rotation={[0, Math.PI, 0]}
              position={[-4, 2.38, 0]}
            >
              IDEMIA 9 1212121L 09/21
              {secondaryTextMaterial}
            </Text>

            {/* Identifier */}
            <Text
              font={fontMaisonNeueBookUrl}
              fontSize={0.24}
              anchorX="left"
              anchorY={"bottom"}
              rotation={[0, Math.PI, 0]}
              position={[4, 0.68, 0]}
            >
              Identifier: 0000000000
              {mainTextMaterial}
            </Text>

            {/* Issue by */}
            <Text
              font={fontMaisonNeueBookUrl}
              fontSize={0.2}
              anchorX="left"
              anchorY={"bottom"}
              rotation={[0, Math.PI, 0]}
              position={[4, 0.15, 0]}
            >
              This card is issued by Swan, pursuant to license
              {secondaryTextMaterial}
            </Text>

            <Text
              font={fontMaisonNeueBookUrl}
              fontSize={0.2}
              anchorX="left"
              anchorY={"bottom"}
              rotation={[0, Math.PI, 0]}
              position={[4, -0.15, 0]}
            >
              by Mastercard international.
              {secondaryTextMaterial}
            </Text>

            {/* Card number */}
            <Text
              font={fontMaisonNeueBookUrl}
              fontSize={0.48}
              anchorX="left"
              anchorY={"bottom"}
              rotation={[0, Math.PI, 0]}
              position={[4, -1.85, 0]}
            >
              {cardNumber}
              {mainTextMaterial}
            </Text>

            {/* Expire date */}
            <Text
              font={fontMaisonNeueBookUrl}
              fontSize={0.29}
              anchorX="left"
              anchorY={"bottom"}
              rotation={[0, Math.PI, 0]}
              position={[4, -2.3, 0]}
            >
              {expirationDate}
              {mainTextMaterial}
            </Text>

            {/* CVC */}
            <Text
              font={fontMaisonNeueBookUrl}
              fontSize={0.29}
              anchorX="left"
              anchorY={"bottom"}
              rotation={[0, Math.PI, 0]}
              position={[2.55, -2.3, 0]}
            >
              CVC {cvv}
              {mainTextMaterial}
            </Text>

            {/* Debit */}
            <Text
              font={fontMarkProRegularUrl}
              anchorX="center"
              anchorY={"bottom"}
              fontSize={0.36}
              rotation={[0, Math.PI, 0]}
              position={[-2.35, -1.15, 0]}
            >
              debit
              {mainTextMaterial}
            </Text>
          </group>

          {/* Logo */}
          <group
            // move group to change scale center at top right corner
            position={[
              CARD_WIDTH / 2 - LOGO_MARGIN_RIGHT,
              CARD_HEIGHT / 2 - LOGO_MARGIN_TOP,
              FRONT_TEXT_POSITION,
            ]}
            scale={logoScale}
          >
            {isNotNullish(logoData) && (
              <mesh position={[-logoData.size[0] / 2, -logoData.size[1] / 2, 0]}>
                <planeGeometry args={logoData.size} />

                <meshStandardMaterial
                  color={match(color)
                    .with("Silver", () => 0x000000)
                    .with("Black", () => 0xffffff)
                    .exhaustive()}
                  metalness={0.1}
                  roughness={0.35}
                  envMapIntensity={ENV_MAP_INTENSITY}
                  transparent={true}
                  alphaMap={logoData.alphaMap}
                />
              </mesh>
            )}
          </group>

          <mesh
            geometry={nodes.black_band.geometry}
            material={materials.black_band}
            position={[0, 1.774, BACK_TEXT_POSITION]}
            rotation={[0, Math.PI / 2, 0]}
          />

          <mesh
            geometry={nodes.chip.geometry}
            material={materials.chip}
            position={[-2.78, 0.439, FRONT_TEXT_POSITION]}
            rotation={[0, Math.PI / 2, 0]}
          />

          <mesh
            geometry={nodes.chip_pattern.geometry}
            material={materials.chip_pattern}
            position={[-2.778, 0.442, FRONT_TEXT_POSITION + 0.001]}
            rotation={[0, Math.PI / 2, 0]}
          />

          <mesh
            geometry={nodes.mc_center.geometry}
            material={materials.mastercard_orange}
            position={[3.052, -1.832, FRONT_TEXT_POSITION]}
            rotation={[Math.PI / 2, 0, 0]}
          />

          <mesh
            geometry={nodes.mc_left.geometry}
            material={materials.mastercard_red}
            position={[2.676, -1.773, FRONT_TEXT_POSITION]}
            rotation={[Math.PI / 2, 0, 0]}
          />

          <mesh
            geometry={nodes.mc_right.geometry}
            material={materials.mastercard_yellow}
            position={[3.47, -1.773, FRONT_TEXT_POSITION]}
            rotation={[-Math.PI / 2, 0, 0]}
          />

          <mesh
            geometry={nodes.metal_circle.geometry}
            material={materials.rainbow}
            position={[-2.33, -1.849, BACK_TEXT_POSITION]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          />

          <mesh
            geometry={nodes.metal_circle001.geometry}
            material={materials.rainbow_rough}
            position={[-2.629, -1.849, BACK_TEXT_POSITION - 0.001]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[0.35, 1, 0.35]}
          />

          <mesh
            geometry={nodes.metal_circle002.geometry}
            material={materials.rainbow_rough}
            position={[-2.33, -1.849, BACK_TEXT_POSITION - 0.001]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          />

          <mesh
            geometry={nodes.metal_mastercard.geometry}
            material={materials.rainbow_mastercard}
            position={[0.914, -1.298, BACK_TEXT_POSITION - 0.001]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={0.09}
          />
        </mesh>
      </group>
    );
  },
);
