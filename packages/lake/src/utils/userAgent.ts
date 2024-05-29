import { isNullish } from "./nullish";

const CHROME_REGEXP = /Chrom(e|ium)\//;
const MOBI_REGEXP = /Mobi/;
const SAFARI_REGEXP = /Safari\//;

/**
 * @deprecated
 */
export const isChrome = CHROME_REGEXP.test(navigator.userAgent);

/**
 * @deprecated
 */
export const isMobile = MOBI_REGEXP.test(navigator.userAgent);

/**
 * @deprecated
 */
export const isChromeMobile = isChrome && isMobile;

/**
 * @see https://github.com/jakearchibald/safari-14-idb-fix/blob/v3.0.0/src/index.ts#L7
 * @deprecated
 */
export const isSafari =
  isNullish(navigator.userAgentData) && SAFARI_REGEXP.test(navigator.userAgent) && !isChrome;

export const isSupportedMobileDevice = ((): boolean => {
  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(navigator.userAgent)) {
    return false;
  }
  if (/android/i.test(navigator.userAgent)) {
    return true;
  }
  // MSStream must be checked to avoid identify IE11 as iOS
  if (/iPad|iPhone/.test(navigator.userAgent) && !("MSStream" in window)) {
    return true;
  }

  return false;
})();
