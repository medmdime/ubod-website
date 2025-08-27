import React from "react";
import { useTranslation } from "react-i18next";
import AppStoreButtons from "./AppStoreButtons";

const HeroText = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-xl">
      <h1 className="text-4xl md:text-5xl font-bold text-darkBrown mb-6">
        {t("hero.title")}
      </h1>
      <p className="text-xl text-lightBrown mb-8">{t("hero.subtitle")}</p>
      <p className="text-lg text-darkBrown mb-8">{t("hero.users")}</p>
      <AppStoreButtons />
    </div>
  );
};

export default HeroText;
