import { describe, expect, test } from "vitest";
import { isValidVatNumber } from "../validation";

describe("isValidVatNumber", () => {
  describe("AT (Austria)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("U12345678")).toBe(true);
      expect(isValidVatNumber("ATU12345678")).toBe(true);
    });
    test("rejects invalid VAT numbers", () => {
      expect(isValidVatNumber("AT12345678")).toBe(false); // U missing
    });
  });

  describe("BE (Belgium)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("0123456789")).toBe(true);
      expect(isValidVatNumber("1123456789")).toBe(true);
      expect(isValidVatNumber("BE0123456789")).toBe(true);
    });
    test("rejects invalid VAT numbers", () => {
      expect(isValidVatNumber("BE2123456789")).toBe(false); // not starting with 1
    });
  });

  describe("BG (Bulgaria)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("123456789")).toBe(true);
      expect(isValidVatNumber("1234567890")).toBe(true);
      expect(isValidVatNumber("BG123456789")).toBe(true);
    });
  });

  describe("CY (Cyprus)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("12345678L")).toBe(true);
      expect(isValidVatNumber("CY12345678L")).toBe(true);
    });
    test("rejects invalid VAT numbers", () => {
      expect(isValidVatNumber("CY12345678")).toBe(false); // not finishing with L
    });
  });

  describe("CZ (Czech Republic)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("12345678")).toBe(true);
      expect(isValidVatNumber("1234567890")).toBe(true);
      expect(isValidVatNumber("CZ12345678")).toBe(true);
    });
  });

  describe("DE (Germany)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("123456789")).toBe(true);
      expect(isValidVatNumber("DE123456789")).toBe(true);
    });
  });

  describe("DK (Denmark)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("12345678")).toBe(true);
      expect(isValidVatNumber("DK12345678")).toBe(true);
    });
  });

  describe("EE (Estonia)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("123456789")).toBe(true);
      expect(isValidVatNumber("EE123456789")).toBe(true);
    });
  });

  describe("EL/GR (Greece)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("123456789")).toBe(true);
      expect(isValidVatNumber("EL123456789")).toBe(true);
      expect(isValidVatNumber("GR123456789")).toBe(true);
    });
  });

  describe("ES (Spain)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("A1234567B")).toBe(true);
      expect(isValidVatNumber("12345678A")).toBe(true);
      expect(isValidVatNumber("ES12345678A")).toBe(true);
    });
  });

  describe("FI (Finland)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("12345678")).toBe(true);
      expect(isValidVatNumber("FI12345678")).toBe(true);
    });
  });

  describe("FR (France)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("AB123456789")).toBe(true);
      expect(isValidVatNumber("12345678901")).toBe(true);
      expect(isValidVatNumber("FRAB123456789")).toBe(true);
    });
  });

  describe("GB (United Kingdom)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("123456789")).toBe(true);
      expect(isValidVatNumber("123456789123")).toBe(true);
      expect(isValidVatNumber("AB123")).toBe(true);
      expect(isValidVatNumber("GB123456789")).toBe(true);
    });
    test("rejects invalid VAT numbers", () => {
      expect(isValidVatNumber("GBB123")).toBe(false); // Must be 2 letter after GB
    });
  });

  describe("HU (Hungary)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("12345678")).toBe(true);
      expect(isValidVatNumber("HU12345678")).toBe(true);
    });
  });

  describe("IE (Ireland)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("1S23456L")).toBe(true);
      expect(isValidVatNumber("IE1S23456L")).toBe(true);
    });
    test("rejects invalid VAT numbers", () => {
      expect(isValidVatNumber("IE1S23456")).toBe(false); // Must have L at the end
      expect(isValidVatNumber("IE123456L")).toBe(false); // Must have S
    });
  });

  describe("IT (Italy)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("12345678901")).toBe(true);
      expect(isValidVatNumber("IT12345678901")).toBe(true);
    });
  });

  describe("LT (Lithuania)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("123456789")).toBe(true);
      expect(isValidVatNumber("123456789012")).toBe(true);
      expect(isValidVatNumber("LT123456789")).toBe(true);
    });
  });

  describe("LU (Luxembourg)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("12345678")).toBe(true);
      expect(isValidVatNumber("LU12345678")).toBe(true);
    });
  });

  describe("LV (Latvia)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("12345678901")).toBe(true);
      expect(isValidVatNumber("LV12345678901")).toBe(true);
    });
  });

  describe("MT (Malta)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("12345678")).toBe(true);
      expect(isValidVatNumber("MT12345678")).toBe(true);
    });
  });

  describe("NL (Netherlands)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("123456789B12")).toBe(true);
      expect(isValidVatNumber("NL123456789B12")).toBe(true);
    });
    test("rejects invalid VAT numbers", () => {
      expect(isValidVatNumber("NL12345678912")).toBe(false); // Must have B
    });
  });

  describe("PL (Poland)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("1234567890")).toBe(true);
      expect(isValidVatNumber("PL1234567890")).toBe(true);
    });
  });

  describe("PT (Portugal)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("123456789")).toBe(true);
      expect(isValidVatNumber("PT123456789")).toBe(true);
    });
  });

  describe("RO (Romania)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("12")).toBe(true);
      expect(isValidVatNumber("1234567890")).toBe(true);
      expect(isValidVatNumber("RO1234567890")).toBe(true);
    });
  });

  describe("SE (Sweden)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("123456789012")).toBe(true);
      expect(isValidVatNumber("SE123456789012")).toBe(true);
    });
  });

  describe("SI (Slovenia)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("12345678")).toBe(true);
      expect(isValidVatNumber("SI12345678")).toBe(true);
    });
  });

  describe("SK (Slovakia)", () => {
    test("accepts valid VAT numbers", () => {
      expect(isValidVatNumber("1234567890")).toBe(true);
      expect(isValidVatNumber("SK1234567890")).toBe(true);
    });
  });

  describe("Unsuported", () => {
    test("refuse unvalid VAT numbers", () => {
      expect(isValidVatNumber("123450972374924")).toBe(false); // too long
      expect(isValidVatNumber("RU1234567890")).toBe(false); // country not supported
    });
  });
});
