import { expect, test } from "vitest";
import { decodeBase64, encodeBase64 } from "../base64";

test("decodeBase64", () => {
  expect(decodeBase64("ZA==")).toBe("d");
  expect(decodeBase64("ZGE=")).toBe("da");
  expect(decodeBase64("ZGFu")).toBe("dan");

  expect(decodeBase64("Z A==")).toBe("d");
  expect(decodeBase64("ZG E=")).toBe("da");
  expect(decodeBase64("ZGF u")).toBe("dan");

  expect(decodeBase64("AA==")).toBe("\0");
  expect(decodeBase64("AAA=")).toBe("\0\0");
  expect(decodeBase64("AAAA")).toBe("\0\0\0");

  expect(decodeBase64("5bCP6aO85by+")).toBe("小飼弾");
  expect(decodeBase64("5bCP6aO85by-")).toBe("小飼弾");
  expect(decodeBase64("8KCut+mHjuWutg==")).toBe("𠮷野家");
  expect(decodeBase64("8KCut-mHjuWutg")).toBe("𠮷野家");
});

test("encodeBase64", () => {
  expect(encodeBase64("d")).toBe("ZA==");
  expect(encodeBase64("da")).toBe("ZGE=");
  expect(encodeBase64("dan")).toBe("ZGFu");

  expect(encodeBase64("\0")).toBe("AA==");
  expect(encodeBase64("\0\0")).toBe("AAA=");
  expect(encodeBase64("\0\0\0")).toBe("AAAA");

  expect(encodeBase64("小飼弾")).toBe("5bCP6aO85by+");
  expect(encodeBase64("𠮷野家")).toBe("8KCut+mHjuWutg==");
});
