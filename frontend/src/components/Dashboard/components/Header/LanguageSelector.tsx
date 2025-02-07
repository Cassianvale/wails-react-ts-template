import React, { useEffect, useState } from 'react';
import { Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { getSystemLanguage } from '../../../../i18n/config';

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isSystemLanguage, setIsSystemLanguage] = useState(true);

  useEffect(() => {
    if (isSystemLanguage) {
      const detectedLanguage = getSystemLanguage();
      if (i18n.language !== detectedLanguage) {
        i18n.changeLanguage(detectedLanguage);
      }
    }
  }, [isSystemLanguage, i18n]);

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
