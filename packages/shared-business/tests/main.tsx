import "../../lake/src/assets/fonts/Inter.css";
import "../../lake/src/assets/fonts/InterCard.css";
import "../../lake/src/assets/fonts/RobotoMono.css";
import "../../lake/src/assets/main.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { CreditStatement } from "../src/components/CreditStatement";

declare global {
  interface Window {
    data: any;
  }
}

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <div>
        <CreditStatement {...window.data} />
      </div>
    </React.StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
