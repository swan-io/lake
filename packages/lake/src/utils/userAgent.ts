import { isNullish } from "./nullish";

const CHROME_REGEXP = /Chrom(e|ium)\//;
const MOBI_REGEXP = /Mobi/;
const SAFARI_REGEXP = /Safari\//;

export const isChrome = CHROME_REGEXP.test(navigator.userAgent);
export const isMobile = MOBI_REGEXP.test(navigator.userAgent);
export const isChromeMobile = isChrome && isMobile;

// https://github.com/jakearchibald/safari-14-idb-fix/blob/v3.0.0/src/index.ts#L7
export const isSafari =
  isNullish(navigator.userAgentData) && SAFARI_REGEXP.test(navigator.userAgent) && !isChrome;
