import { Result } from "@swan-io/boxed";
import { match } from "ts-pattern";
import { encodeBase64 } from "./base64";
import { isNotNullish, isNotNullishOrEmpty } from "./nullish";

type Size = {
  width: number;
  height: number;
};

const BASE64_URI_PREFIX = "data:image/svg+xml;base64,";

export const convertSvgToBase64Uri = (svg: SVGElement): string => {
  return BASE64_URI_PREFIX + encodeBase64(svg.outerHTML);
};

export const getSvgSize = (svg: SVGElement): Result<Size, string> => {
  // first we try to get width and height from "width" and "height" attributes
  const widthAttr = svg.getAttribute("width");
  const heightAttr = svg.getAttribute("height");

  const width = isNotNullish(widthAttr) ? parseInt(widthAttr) : NaN;
  const height = isNotNullish(heightAttr) ? parseInt(heightAttr) : NaN;

  if (!isNaN(width) || !isNaN(height)) {
    return Result.Ok({ width, height });
  }

  // if height and width aren't provided, we get values from viewBox attribute
  const viewBox = svg.getAttribute("viewBox");
  const [, , boxWidthAttr, boxHeightAttr] = viewBox?.split(" ") ?? [];

  const boxWidth = isNotNullish(boxWidthAttr) ? parseInt(boxWidthAttr) : NaN;
  const boxHeight = isNotNullish(boxHeightAttr) ? parseInt(boxHeightAttr) : NaN;

  if (isNaN(boxWidth) || isNaN(boxHeight)) {
    return Result.Error("VIEWBOX_MISSING");
  }

  return Result.Ok({
    width: boxWidth,
    height: boxHeight,
  });
};

// Create image with 1024px width or 256px height to optimize threejs mipmapping
const getImageSize = (size: Size): Size => {
  const ratio = size.width / size.height;
  // if svg is wider, we set width at 1024px and adapt height
  if (ratio >= 1) {
    const width = 1024;
    const height = width / ratio;
    return { width, height };
  } else {
    // because of logo max height, we don't need to go higher than 256px
    // we set height at 256px and adapt width
    const height = 256;
    const width = height * ratio;
    return { width, height };
  }
};

const isSvgColored = (element: Element): boolean => {
  const fill = element.getAttribute("fill");
  const stroke = element.getAttribute("stroke");
  const style = element.getAttribute("style");

  if (element.tagName === "style") {
    return element.innerHTML.includes("fill") || element.innerHTML.includes("stroke");
  }

  if (isNotNullishOrEmpty(fill) || isNotNullishOrEmpty(stroke) || isNotNullishOrEmpty(style)) {
    return true;
  }

  return [...element.children].some(children => isSvgColored(children));
};

/**
 * This function create a matrix which can be used in <feColorMatrix> element
 * More info here: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix
 */
const getMatrixColor = (color: "white" | "black"): string => {
  const colorIntensity = color === "white" ? 1 : 0;
  const red = colorIntensity;
  const green = colorIntensity;
  const blue = colorIntensity;
  const alpha = 1;

  // prettier-ignore
  const matrix = [
    red,   red,   red,   red,   red,   // R
    green, green, green, green, green, // G
    blue,  blue,  blue,  blue,  blue,  // B
    0,     0,     0,     alpha, 0,     // A
  ]

  return matrix.join(" ");
};

export const getMonochromeSvg = (svg: SVGElement, color: "white" | "black"): SVGElement => {
  const hexaCode = match(color)
    .with("black", () => "#000")
    .with("white", () => "#FFF")
    .exhaustive();

  const newSvg = svg.cloneNode(true) as SVGElement;

  if (!isSvgColored(svg)) {
    newSvg.setAttribute("fill", hexaCode);
    newSvg.setAttribute("stroke", hexaCode);
    return newSvg;
  }

  const tagsToNotChange = ["mask"];

  const changeElementColor = (element: Element): void => {
    if (element.tagName === "style") {
      const css = element.innerHTML;
      const regex =
        /#[A-F0-9]{6,6}|#[A-F0-9]{3,3}|rgb\(\d{1,3},\d{1,3},\d{1,3}\)|rgba\(\d{1,3},\d{1,3},\d{1,3},\d\.?\d{0,}\)/gim;

      const cssWithColor = css.replace(regex, hexaCode);
      element.innerHTML = cssWithColor;
    }

    if (element.tagName === "feColorMatrix") {
      const matrix = getMatrixColor(color);
      element.setAttribute("type", "matrix");
      element.setAttribute("values", matrix);
    }

    const isElementToChange = !tagsToNotChange.includes(element.tagName);

    const fill = isElementToChange ? element.getAttribute("fill") : null;
    const stroke = isElementToChange ? element.getAttribute("stroke") : null;
    const stopColor = isElementToChange ? element.getAttribute("stop-color") : null;
    const style = isElementToChange ? element.getAttribute("style") : null;

    if (isNotNullishOrEmpty(fill) && fill !== "none") {
      element.setAttribute("fill", hexaCode);
    }
    if (isNotNullishOrEmpty(stroke) && stroke !== "none") {
      element.setAttribute("stroke", hexaCode);
    }
    // stop-color is used for gradients
    if (isNotNullishOrEmpty(stopColor) && stopColor !== "none") {
      element.setAttribute("stop-color", hexaCode);
    }
    if (isNotNullishOrEmpty(style)) {
      const styleWithColor = style
        .split(";")
        .map(rule => {
          const [property, value] = rule.split(":");
          // stop-color is used for gradients
          if (
            isNotNullishOrEmpty(property) &&
            ["fill", "stroke", "stop-color"].includes(property) &&
            value !== "none"
          ) {
            return `${property}:${hexaCode}`;
          }
          return rule;
        })
        .join(";");

      element.setAttribute("style", styleWithColor);
    }

    [...element.children].forEach(children => changeElementColor(children));
  };

  changeElementColor(newSvg);

  return newSvg;
};

export const createSvgImage = (svg: SVGElement): Result<HTMLImageElement, string> => {
  return getSvgSize(svg).map(svgSize => {
    const base64Uri = convertSvgToBase64Uri(svg);
    const { width, height } = getImageSize(svgSize);
    const image = new Image(width, height);
    image.src = base64Uri;

    return image;
  });
};
