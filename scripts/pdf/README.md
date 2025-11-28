# PDF Generation Scripts

This folder contains scripts used to generate PDF documents with the <AccountStatement> component.

- `main.tsx`: Renders the Account Statement React component to static markup, which will be used for PDF generation.
- `print.ts`: Starts a local development server and uses Playwright to automate Chromium, rendering the page and exporting it as a PDF.

You can modify the components or data in `main.tsx` to change the PDF content. The output PDF file will be saved as `output.pdf` in this directory.

These scripts are useful for automating and testing PDF rendering and layout for business reports or statements.

**Prerequisites:** Node.js, all project dependencies installed, and Playwright browser binaries (run `npx playwright install` if needed).

**Usage:**
From the root folder Run `pnpm tsx scripts/pdf/print.ts` to generate a PDF using the current configuration.
