import { ASTVisitor, Kind, parse, visit } from "graphql";
import fs from "node:fs";
import os from "node:os";
import path from "pathe";
import { string, validate } from "valienv";
import { getIntrospection } from "./downloadSchemas";

const env = validate({
  env: process.env,
  validators: {
    PARTNER_API_URL: string,
  },
});

const isStringRecord = (value: unknown): value is Record<string, string> =>
  String(value) === "[object Object]" &&
  value != null &&
  Object.values(value).every(item => typeof item === "string");

const localesPath = path.resolve(__dirname, "../../packages/shared-business/src/locales");

const run = async () => {
  const supportingDocumentPurposesKeySet: Set<string> = new Set();

  const visitor: ASTVisitor = {
    [Kind.ENUM_TYPE_DEFINITION]: {
      leave: node => {
        const isSupporingDocumentPurpose = node.name.value === "SupportingDocumentPurposeEnum";

        if (isSupporingDocumentPurpose) {
          node.values
            ?.map(item => item.name.value)
            .forEach(name => {
              supportingDocumentPurposesKeySet.add(`supportingDocuments.purpose.${name}`);
              supportingDocumentPurposesKeySet.add(
                `supportingDocuments.purpose.${name}.description`,
              );
            });
        }
      },
    },
  };

  const schemasToDownload = [env.PARTNER_API_URL];

  await Promise.all(
    schemasToDownload.map(async url => {
      const schema = await getIntrospection(url);
      const parsed = parse(schema);
      visit(parsed, visitor);
    }),
  );

  const supportingDocumentPurposesKeys = Array.from(
    supportingDocumentPurposesKeySet.values(),
  ).sort();

  fs.readdirSync(localesPath).map(file => {
    const filePath = path.join(localesPath, file);
    const currentText = fs.readFileSync(filePath, "utf-8");
    const currentJson: unknown = JSON.parse(currentText);

    if (!isStringRecord(currentJson)) {
      throw new Error(`Invalid JSON: ${file}`);
    }

    const nonSupportingDocumentsKeys = Object.keys(currentJson).filter(
      key => !key.startsWith("supportingDocuments.purpose."),
    );

    const filteredSupportingDocumentPurposesKeys =
      file === "en.json"
        ? supportingDocumentPurposesKeys
        : supportingDocumentPurposesKeys.filter(key => {
            const value = currentJson[key];
            return value != null && value.trim() !== "";
          });

    const keys = [...nonSupportingDocumentsKeys, ...filteredSupportingDocumentPurposesKeys];
    keys.sort(); // sort in place

    const nextJson = Object.fromEntries(keys.map(key => [key, currentJson[key] ?? ""]));
    const nextText = JSON.stringify(nextJson, null, 2) + os.EOL;

    if (nextText !== currentText) {
      fs.writeFileSync(filePath, nextText, "utf-8");
    }
  });
};

void run();
