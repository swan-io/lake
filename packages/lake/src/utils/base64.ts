// Extracted from https://github.com/dankogai/js-base64
// Compared to atob / btoa, these functions are safe with non-Latin1 characters

const decodeUTF8 = TextDecoder.prototype.decode.bind(new TextDecoder());
const encodeUTF8 = TextEncoder.prototype.encode.bind(new TextEncoder());
const u8From = Uint8Array.from.bind(Uint8Array);
const fromCharCode = String.fromCharCode.bind(String);

export const encodeBase64 = (value: string) => {
  const u8 = encodeUTF8(value);
  // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
  const maxArgs = 0x1000;
  const data: string[] = [];

  for (let index = 0; index < u8.length; index += maxArgs) {
    data.push(fromCharCode(...u8.subarray(index, index + maxArgs)));
  }

  return btoa(data.join(""));
};

const unURI = (base64: string) =>
  base64
    .replace(/[-_]/g, substring => (substring == "-" ? "+" : "/"))
    .replace(/[^A-Za-z0-9+/]/g, "");

export const decodeBase64 = (base64: string) =>
  decodeUTF8(u8From(atob(unURI(base64)), value => value.charCodeAt(0)));
