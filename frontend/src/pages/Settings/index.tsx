import React from 'react';
import { Card, Form, Select, Switch } from 'antd';
import { useTranslation } from 'react-i18next';

const Settings: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="settings-container">
      <h1>{t('pages.settings.title')}</h1>
      <Card>
        <Form layout="vertical">
          <Form.Item label={t('settings.language')} name="language">
            <Select
              defaultValue={i18n.language}
              onChange={handleLanguageChange}
              options={[
                { value: 'en', label: t('header.language.en') },
                { value: 'zh', label: t('header.language.zh') },
              ]}
            />
          </Form.Item>
          <Form.Item 
            label={t('settings.notifications')} 
            name="notifications"
          >
            <Switch defaultChecked />
          </Form.Item>
          <Form.Item 
            label={t('settings.autoStart')} 
            name="autoStart"
          >
            <Switch />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Settings;
