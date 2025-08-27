import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { frFR, esES, enUS } from "@clerk/localizations";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const getClerkLocalization = (lng: string) => {
  switch (lng) {
    case "fr":
      return frFR;
    case "es":
      return esES;
    default:
      return enUS;
  }
};

const userLang = i18n.language;
const clerkLocalization = getClerkLocalization(userLang);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ClerkProvider
        localization={clerkLocalization}
        publishableKey={PUBLISHABLE_KEY}
      >
        <App />
      </ClerkProvider>
    </I18nextProvider>
  </StrictMode>
);
