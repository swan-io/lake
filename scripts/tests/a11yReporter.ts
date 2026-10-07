import path from "node:path";
import { stripVTControlCharacters, styleText } from "node:util";
import type { Reporter, SerializedError, TestModule } from "vitest/node";
import type { A11yViolation } from "./a11ySetup";

// Replaces the default reporter for `pnpm test-a11y`: instead of dumping every axe error, it
// prints a summary by component and by rule.

type StoryResult = {
  component: string;
  story: string;
  passed: boolean;
  violations: A11yViolation[];
  // Failure that isn't an a11y violation (render error, axe crash…)
  error?: string;
};

type RuleSummary = {
  id: string;
  help: string;
  impact: string | null;
  nodes: number;
  stories: Set<string>;
  components: Set<string>;
};

const IMPACT_ORDER = ["critical", "serious", "moderate", "minor"];

const getComponentName = (moduleId: string) =>
  path.basename(moduleId).replace(/\.stories\.[jt]sx?$/, "");

// Storybook prefixes errors with an empty line and a "Click to debug" link
const getFirstLine = (message: string) =>
  stripVTControlCharacters(message)
    .split("\n")
    .map(line => line.trim())
    .find(line => line !== "" && !line.startsWith("Click to debug")) ?? message;

const collectStories = (testModules: ReadonlyArray<TestModule>): StoryResult[] =>
  testModules.flatMap(testModule => {
    const component = getComponentName(testModule.moduleId);

    return [...testModule.children.allTests()]
      .filter(testCase => testCase.result().state !== "skipped")
      .map(testCase => {
        const result = testCase.result();
        const a11y = testCase.meta().a11y;
        const violations = a11y?.violations ?? [];
        const passed = result.state === "passed";
        const firstError = result.errors?.[0]?.message;

        return {
          component,
          story: testCase.name,
          passed,
          violations,
          error: a11y?.error ?? (!passed && violations.length === 0 ? firstError && getFirstLine(firstError) : undefined),
        };
      });
  });

const summarizeRules = (stories: StoryResult[]) => {
  const rules = new Map<string, RuleSummary>();

  for (const story of stories) {
    for (const violation of story.violations) {
      const rule = rules.get(violation.id) ?? {
        id: violation.id,
        help: violation.help,
        impact: violation.impact,
        nodes: 0,
        stories: new Set(),
        components: new Set(),
      };

      rule.nodes += violation.nodes;
      rule.stories.add(`${story.component} › ${story.story}`);
      rule.components.add(story.component);
      rules.set(violation.id, rule);
    }
  }

  return [...rules.values()].sort((a, b) => b.nodes - a.nodes);
};

const summarizeComponents = (stories: StoryResult[]) => {
  const components = new Map<string, StoryResult[]>();

  for (const story of stories) {
    components.set(story.component, [...(components.get(story.component) ?? []), story]);
  }

  return [...components.entries()]
    .map(([name, items]) => ({
      name,
      stories: items.length,
      failedStories: items.filter(item => !item.passed).length,
      nodes: items.reduce(
        (total, item) => total + item.violations.reduce((sum, v) => sum + v.nodes, 0),
        0,
      ),
      rules: [...new Set(items.flatMap(item => item.violations.map(v => v.id)))].sort(),
      errors: items.filter(item => item.error != null),
    }))
    .sort((a, b) => b.nodes - a.nodes || a.name.localeCompare(b.name));
};

const table = (headers: string[], rows: string[][]) => {
  const widths = headers.map((header, index) =>
    Math.max(header.length, ...rows.map(row => (row[index] ?? "").length)),
  );
  const line = (cells: string[]) =>
    cells.map((cell, index) => cell.padEnd(widths[index] ?? 0)).join("  ");

  return [styleText("bold", line(headers)), ...rows.map(line)].join("\n");
};

export default class A11yReporter implements Reporter {
  onTestRunEnd(
    testModules: ReadonlyArray<TestModule>,
    unhandledErrors: ReadonlyArray<SerializedError>,
  ) {
    const stories = collectStories(testModules);
    const rules = summarizeRules(stories);
    const components = summarizeComponents(stories);

    const failedComponents = components.filter(item => item.failedStories > 0);
    const failedStories = stories.filter(item => !item.passed);
    const totalNodes = rules.reduce((total, rule) => total + rule.nodes, 0);
    const errors = stories.filter(item => item.error != null);

    const impactCounts = IMPACT_ORDER.map(impact => ({
      impact,
      nodes: rules.filter(rule => rule.impact === impact).reduce((sum, r) => sum + r.nodes, 0),
    })).filter(item => item.nodes > 0);

    // Terminal

    const ok = (text: string) => styleText("green", text);
    const ko = (text: string) => styleText("red", text);

    console.log(`\n${styleText(["bold", "underline"], "Accessibility report")}\n`);
    console.log(
      `Components  ${ok(`${components.length - failedComponents.length} passing`)} | ${ko(`${failedComponents.length} failing`)} (${components.length})`,
    );
    console.log(
      `Stories     ${ok(`${stories.length - failedStories.length} passing`)} | ${ko(`${failedStories.length} failing`)} (${stories.length})`,
    );
    console.log(
      `Violations  ${totalNodes} elements across ${rules.length} rules${
        impactCounts.length > 0
          ? ` (${impactCounts.map(item => `${item.impact}: ${item.nodes}`).join(", ")})`
          : ""
      }`,
    );

    if (rules.length > 0) {
      console.log(`\n${styleText("bold", "By rule")}\n`);
      console.log(
        table(
          ["Rule", "Impact", "Elements", "Stories", "Components"],
          rules.map(rule => [
            `${rule.help} (${rule.id})`,
            rule.impact ?? "-",
            String(rule.nodes),
            String(rule.stories.size),
            String(rule.components.size),
          ]),
        ),
      );
    }

    if (failedComponents.length > 0) {
      console.log(`\n${styleText("bold", "Failing components")}\n`);
      console.log(
        table(
          ["Component", "Failing stories", "Elements", "Rules"],
          failedComponents.map(item => [
            item.name,
            `${item.failedStories}/${item.stories}`,
            String(item.nodes),
            item.errors.length > 0 && item.rules.length === 0 ? ko("error, see below") : item.rules.join(", "),
          ]),
        ),
      );
    }

    if (errors.length > 0) {
      console.log(`\n${styleText("bold", "Non-a11y failures")}\n`);
      for (const item of errors) {
        console.log(`${ko("✗")} ${item.component} › ${item.story}: ${item.error}`);
      }
    }

    const moduleErrors = testModules.flatMap(testModule =>
      testModule.errors().map(error => `${getComponentName(testModule.moduleId)}: ${error.message}`),
    );

    for (const error of [...moduleErrors, ...unhandledErrors.map(error => error.message)]) {
      console.log(`${ko("✗")} ${getFirstLine(error)}`);
    }

    console.log("");
  }
}
