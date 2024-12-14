import React from 'react';
import { useTranslation } from 'react-i18next';
import SupportForm from '../components/SupportForm';

const Support = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-48 bg-gradient-to-b items-center from-beige to-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-darkBrown mb-8 text-center">
            {t('support.title')}
          </h1>
          <SupportForm />
        </div>
      </div>
    </div>
  );
};

export default Support;