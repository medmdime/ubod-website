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
      {/* <button className="bg-darkGreen text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-darkGreen/90 transition-colors">
        <span>{t('hero.cta')}</span>
        <ArrowRight size={20} />
      </button> */}
      <AppStoreButtons />
    </div>
  );
};

export default HeroText;
