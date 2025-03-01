import React from "react";
import { useTranslation } from "react-i18next";
import SupportForm from "../components/SupportForm";

const Support = () => {
  const { t } = useTranslation();

  return (
    <div className="h-3/4 mt-20  items-center bg-white max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl ">
      <h1 className="text-3xl font-bold text-darkBrown mb-8 text-center">
        {t("support.title")}
      </h1>
      <SupportForm />
    </div>
  );
};

export default Support;
