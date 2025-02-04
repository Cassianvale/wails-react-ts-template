import React from 'react';
import { useTranslation } from 'react-i18next';

const KeySimulation: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('pages.keySimulation.title')}</h1>
    </div>
  );
};

export default KeySimulation;
