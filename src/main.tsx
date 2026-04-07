import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/context/ThemeContext.tsx";
import { LngProvider } from "./components/context/lng.context.tsx";
import "./i18n";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LngProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LngProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
