import react from "@vitejs/plugin-react-swc";
import { chromium } from "playwright";
import { createServer } from "vite";

const main = async () => {
  const devServer = await createServer({
    optimizeDeps: { force: true },
    root: __dirname,
    resolve: { alias: { "react-native": "react-native-web" } },
    plugins: [react()],
  });

  await devServer.listen(3000);

  const browser = await chromium.launch({
    args: ["--font-render-hinting=none"],
    headless: true,
  });

  try {
    const page = await browser.newPage({
      locale: "en",
      bypassCSP: true,
    });

    await page.emulateMedia({ media: "print" });

    await page.goto(`http://localhost:3000`, { waitUntil: "load" });

    await page.waitForLoadState("networkidle");

    // const headerTemplate = (await page.evaluate("headerTemplate")) as string;
    const headerTemplate = (await page.evaluate(() => (window as any).headerTemplate)) as string;
    const footerTemplate = (await page.evaluate(() => (window as any).footerTemplate)) as string;

    // console.log("#headerTemplate", headerTemplate);

    // await page.pause();
    const fileContent = await page.pdf({
      path: __dirname + "/output.pdf",
      format: "A4",
      margin: { top: "140px", bottom: "160px" },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: headerTemplate,
      footerTemplate: footerTemplate,
    });

    console.log("PDF generated successfully: output.pdf");

    return fileContent;
  } finally {
    // Cleanup: close browser and server
    await browser.close();
    await devServer.close();
  }
};

main()
  .then(() => {
    console.log("Script completed successfully");
    process.exit(0);
  })
  .catch(error => {
    console.error("Error generating PDF:", error);
    process.exit(1);
  });
