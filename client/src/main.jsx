import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ReservationProvider } from "./context/ReservationContext.jsx";
import "./i18n";
import { LanguageProvider } from "./context/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <ReservationProvider>
          <App />
        </ReservationProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
