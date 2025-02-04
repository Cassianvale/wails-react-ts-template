import React from 'react';
import { useTranslation } from 'react-i18next';

const MacroEditor: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('pages.macroEditor.title')}</h1>
    </div>
  );
};

export default MacroEditor;
