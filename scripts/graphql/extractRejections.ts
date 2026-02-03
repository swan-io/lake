import { ASTVisitor, Kind, parse, visit } from "graphql";
import fs from "node:fs";
import os from "node:os";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from "pathe";
import { string, validate } from "valienv";
import { getIntrospection } from "./downloadSchemas";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const env = validate({
  env: process.env,
  validators: {
    PARTNER_API_URL: string,
    UNAUTHENTICATED_API_URL: string,
  },
});

const isStringRecord = (value: unknown): value is Record<string, string> =>
  String(value) === "[object Object]" &&
  value != null &&
  Object.values(value).every(item => typeof item === "string");

const localesPath = path.resolve(__dirname, "../../packages/shared-business/src/locales");

const run = async () => {
  const rejectionKeys: string[] = [];

  const visitor: ASTVisitor = {
    [Kind.OBJECT_TYPE_DEFINITION]: {
      leave: node => {
        const implementsRejection =
          node.interfaces?.some(value => value.name.value === "Rejection") ?? false;

        if (implementsRejection) {
          const key = `rejection.${node.name.value}`;

          if (!rejectionKeys.includes(key)) {
            rejectionKeys.push(key);
          }
        }
      },
    },
  };

  const schemasToDownload = [env.PARTNER_API_URL, env.UNAUTHENTICATED_API_URL];

  await Promise.all(
    schemasToDownload.map(async url => {
      const schema = await getIntrospection(url);
      const parsed = parse(schema);
      visit(parsed, visitor);
    }),
  );

  rejectionKeys.sort(); // sort in place

  fs.readdirSync(localesPath).map(file => {
    const filePath = path.join(localesPath, file);
    const currentText = fs.readFileSync(filePath, "utf-8");
    const currentJson: unknown = JSON.parse(currentText);

    if (!isStringRecord(currentJson)) {
      throw new Error(`Invalid JSON: ${file}`);
    }

    const nonRejectionKeys = Object.keys(currentJson).filter(key => !key.startsWith("rejection."));

    const filteredRejectionKeys =
      file === "en.json"
        ? rejectionKeys
        : rejectionKeys.filter(key => {
            const value = currentJson[key];
            return value != null && value.trim() !== "";
          });

    const keys = [...nonRejectionKeys, ...filteredRejectionKeys];
    keys.sort(); // sort in place

    const nextJson = Object.fromEntries(keys.map(key => [key, currentJson[key] ?? ""]));
    const nextText = JSON.stringify(nextJson, null, 2) + os.EOL;

    if (nextText !== currentText) {
      fs.writeFileSync(filePath, nextText, "utf-8");
    }
  });
};

void run();
