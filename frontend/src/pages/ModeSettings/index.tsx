import React from 'react';
import { useTranslation } from 'react-i18next';

const ModeSettings: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('pages.modeSettings.title')}</h1>
    </div>
  );
};

export default ModeSettings;
