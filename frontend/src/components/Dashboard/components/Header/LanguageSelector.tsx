import React from 'react';
import { Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();

  const languageMenuItems = [
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
    i18n.changeLanguage(key);
  };

  return (
    <Dropdown
      menu={{
        items: languageMenuItems,
        onClick: handleLanguageChange,
        selectedKeys: [i18n.language],
      }}
      placement="bottomRight"
      trigger={['click']}
    >
      <Button
        type="text"
        icon={<GlobalOutlined />}
        size="small"
        className="header-button"
      />
    </Dropdown>
  );
};

export default LanguageSelector;
