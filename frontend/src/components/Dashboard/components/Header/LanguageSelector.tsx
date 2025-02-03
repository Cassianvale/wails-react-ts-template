import React, { useEffect, useState } from 'react';
import { Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isSystemLanguage, setIsSystemLanguage] = useState(true);

  const getSystemLanguage = () => {
    const systemLanguage = navigator.language.toLowerCase();
    const supportedLanguages = ['en', 'zh'];
    const defaultLanguage = 'en';
    
    return supportedLanguages.find(lang => 
      systemLanguage.startsWith(lang)
    ) || defaultLanguage;
  };

  useEffect(() => {
    if (isSystemLanguage) {
      const detectedLanguage = getSystemLanguage();
      if (i18n.language !== detectedLanguage) {
        i18n.changeLanguage(detectedLanguage);
      }
    }
  }, [isSystemLanguage]);

  const languageMenuItems = [
    {
      key: 'system',
      label: t('header.language.system'),
    },
    {
      key: 'en',
      label: t('header.language.en'),
    },
    {
      key: 'zh',
      label: t('header.language.zh'),
    },
  ];

  const handleLanguageChange = ({ key }: { key: string }) => {
    if (key === 'system') {
      setIsSystemLanguage(true);
      const systemLang = getSystemLanguage();
      i18n.changeLanguage(systemLang);
    } else {
      setIsSystemLanguage(false);
      i18n.changeLanguage(key);
    }
  };

  return (
    <Dropdown
      menu={{
        items: languageMenuItems,
        onClick: handleLanguageChange,
        selectedKeys: [isSystemLanguage ? 'system' : i18n.language],
      }}
      placement="bottomRight"
    >
      <Button
        type="text"
        icon={<GlobalOutlined />}
        size="small"
        style={{ color: '#666' }}
      />
    </Dropdown>
  );
};

export default LanguageSelector;
