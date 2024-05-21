import { ReactNode } from "react";
import { StyleSheet, ViewProps, unstable_createElement as createElement } from "react-native";

const styles = StyleSheet.create({
  svg: {
    display: "flex",
    flexBasis: "auto",
    flexGrow: 0,
    flexShrink: 0,
  },
});

type ChildrenProp = { children?: ReactNode };
type FillRule = "evenodd" | "nonzero";
type CommonProps = Pick<ViewProps, "id" | "role" | "style" | "tabIndex" | "testID"> & ChildrenProp;

type SvgProps = CommonProps & {
  height?: number;
  title?: string;
  viewBox?: string;
  width?: number;
};

type CircleProps = CommonProps & {
  fill?: string;
  fillRule?: FillRule;
  opacity?: number;
  stroke?: string;
  strokeWidth?: number;
  cx?: number;
  cy?: number;
  r?: number;
};

type GProps = CommonProps & {
  clipPath?: string;
  fill?: string;
  fillRule?: FillRule;
  opacity?: number;
  stroke?: string;
  strokeWidth?: number;
  transform?: string;
  mask?: string;
};

type RadialGradientProps = CommonProps & {
  id?: string;
  cx?: string;
  cy?: string;
  fx?: string;
  fy?: string;
  r?: string;
  gradientTransform?: string;
  gradientUnits?: "objectBoundingBox" | "userSpaceOnUse";
};

type ImageProps = CommonProps & {
  x?: number;
  y?: number;
  width: number;
  height: number;
  xlinkHref: string;
  preserveAspectRatio?: string;
};

type PathProps = CommonProps & {
  d?: string;
  fill?: string;
  fillOpacity?: number;
  fillRule?: "nonzero" | "evenodd";
  opacity?: number;
  stroke?: string;
  strokeLinecap?: "round";
  strokeLinejoin?: "round";
  strokeWidth?: number;
  transform?: string;
  strokeDasharray?: string;
  strokeDashoffset?: string;
};

type RectProps = CommonProps & {
  x?: number;
  y?: number;
  fill?: string;
  height?: number;
  rx?: number;
  width?: number;
  strokeWidth?: number;
  stroke?: string;
  fillRule?: string;
  strokeOpacity?: number;
};

type StopProps = CommonProps & {
  offset?: string;
  stopColor?: string;
  stopOpacity?: number;
};

type UseProps = CommonProps & {
  xlinkHref?: string;
};

type AnimateProps = CommonProps & {
  attributeName: string;
  values: string;
  dur: string;
  begin: string;
  repeatCount?: string;
  fill?: string;
};

type LineProps = CommonProps & {
  x1: string;
  x2: string;
  y1: string;
  y2: string;
  strokeLinecap?: "round";
  strokeLinejoin?: "round";
  strokeWidth?: number;
  stroke?: string;
};

type TextProps = CommonProps & {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  fill?: string;
  transform?: string;
};

type TspanProps = CommonProps & {
  x?: number;
  y?: number;
};

type PolygonProps = CommonProps & {
  points: string;
  fill?: string;
};

export const Svg = ({ style, ...props }: SvgProps) =>
  createElement("svg", { ...props, style: [styles.svg, style] });

export const Circle = (props: CircleProps) => createElement("circle", props);
export const Defs = (props: ChildrenProp) => createElement("defs", props);
export const G = (props: GProps) => createElement("g", props);
export const Use = (props: UseProps) => createElement("use", props);
export const Mask = (props: CommonProps) => createElement("mask", props);
export const Text = (props: TextProps) => createElement("text", props);
export const Tspan = (props: TspanProps) => createElement("tspan", props);
export const Polygon = (props: PolygonProps) => createElement("polygon", props);

export const Image = (props: ImageProps) => createElement("image", props);

export const RadialGradient = (props: RadialGradientProps) =>
  createElement("radialGradient", props);

export const Path = (props: PathProps) => createElement("path", props);
export const Line = (props: LineProps) => createElement("line", props);
export const Rect = (props: RectProps) => createElement("rect", props);
export const Stop = (props: StopProps) => createElement("stop", props);
export const Animate = (props: AnimateProps) => createElement("animate", props);
