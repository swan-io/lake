// from https://stackoverflow.com/questions/21741841/detecting-ios-android-operating-system
export const isDecentMobileDevice = ((): boolean => {
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
