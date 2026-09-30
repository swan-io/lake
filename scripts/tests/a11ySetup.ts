import { afterEach } from "vitest";

// Storybook only copies its reports to `task.meta` when a story passes, so a story failing on
// a11y violations would leave nothing for the reporter. We copy a trimmed-down version of the
// axe results ourselves, whatever the test outcome, for `scripts/tests/a11yReporter.ts`.

export type A11yViolation = {
  id: string;
  impact: string | null;
  help: string;
  tags: string[];
  nodes: number;
};

export type A11yMeta = {
  status: string;
  violations: A11yViolation[];
  error?: string;
};

declare module "vitest" {
  interface TaskMeta {
    a11y?: A11yMeta;
    componentName?: string;
  }
}

type AxeViolation = {
  id: string;
  impact?: string | null;
  help: string;
  tags: string[];
  nodes: unknown[];
};

type Report = {
  type: string;
  status: string;
  result?: { violations?: AxeViolation[]; error?: unknown };
};

afterEach(context => {
  const { story } = context as unknown as { story?: { reporting?: { reports: Report[] } } };
  const report = story?.reporting?.reports.find(item => item.type === "a11y");

  if (report == null) {
    return;
  }

  context.task.meta.a11y = {
    status: report.status,
    violations: (report.result?.violations ?? []).map(violation => ({
      id: violation.id,
      impact: violation.impact ?? null,
      help: violation.help,
      tags: violation.tags,
      nodes: violation.nodes.length,
    })),
    ...(report.result?.error != null ? { error: String(report.result.error) } : {}),
  };
});
