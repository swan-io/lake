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
      path: "output.pdf",
      format: "A4",
      margin: { top: "140px", bottom: "160px" },
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: headerTemplate,
      footerTemplate: footerTemplate,
      //   footerTemplate: `<div style="width:100%; margin:0; padding: 24px 48px;
      //     font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      //     -webkit-print-color-adjust: exact; color:#737276; font-size:10.5px; line-height:1.5; box-sizing:border-box;">

      //   <div style="border-top:1px solid #d9d9d9; margin-bottom: 24px;"></div>

      //   <div style="display:flex; justify-content:space-between; align-items:flex-start; width:100%;">

      //     <div style="flex:1; text-align:justify; padding-right:24px">
      //       SWAN est une société par actions simplifiée (SAS) immatriculée sous le numéro 853 827 103 0054,
      //       avec un capital de €951 164,50, numéro de TVA FR90853827103 et dont le siège social est situé
      //       au 91 rue du Faubourg Saint-Honoré, 75008 Paris, FRANCE.
      //       En tant qu'établissement de monnaie électronique offrant des services de paiement en vertu du droit français
      //       approuvé par l'ACPR, SWAN est inscrite auprès de ce dernier sous le numéro 17328.
      //     </div>

      //     <div style="text-align:right;">
      //       <div style="font-size:12px; font-weight:600; margin-bottom:3px;">Need help?</div>
      //       <div>
      //         <a href="https://support.swan.io" style="font-weight:400; font-size:12px; color:#737276; text-decoration:none;">support.swan.io</a>
      //       </div>
      //       <div style="margin-top:8px; font-size:10px; color:#737276;">
      //         Page <span class="pageNumber"></span> de <span class="totalPages"></span>
      //       </div>
      //     </div>
      //   </div>
      // </div>`,
    });

    console.log("PDF generated successfully: output.pdf");

    return fileContent;
  } finally {
    // Cleanup: close browser and server
    // await browser.close();
    // await devServer.close();
  }
};

main()
  .then(() => {
    console.log("Script completed successfully");
    // process.exit(0);
  })
  .catch(error => {
    console.error("Error generating PDF:", error);
    process.exit(1);
  });
