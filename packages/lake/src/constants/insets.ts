const canUseSupports = "CSS" in window && "supports" in window.CSS;
const canUseConstant = canUseSupports && window.CSS.supports("top: constant(safe-area-inset-top)");
const canUseEnv = canUseSupports && window.CSS.supports("top: env(safe-area-inset-top)");
const cssFn = canUseConstant ? "constant" : "env";
const isAvailable = canUseConstant || canUseEnv;

const top = `${cssFn}(safe-area-inset-top)`;
const bottom = `${cssFn}(safe-area-inset-bottom)`;
const left = `${cssFn}(safe-area-inset-left)`;
const right = `${cssFn}(safe-area-inset-right)`;

const addToX = (value: number | string, to: string) =>
  isAvailable && (value > 0 || typeof value === "string")
    ? `calc(${to} + ${typeof value === "string" ? value : `${value}px`})`
    : value;

export const insets = {
  top: isAvailable ? top : 0,
  bottom: isAvailable ? bottom : 0,
  left: isAvailable ? left : 0,
  right: isAvailable ? right : 0,
  addToTop: (value: number | string) => addToX(value, top),
  addToBottom: (value: number | string) => addToX(value, bottom),
  addToLeft: (value: number | string) => addToX(value, left),
  addToRight: (value: number | string) => addToX(value, right),
};
