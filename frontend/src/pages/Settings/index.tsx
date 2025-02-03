import React from 'react';
import { Form, Switch, Divider, message } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  BellOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
import { css } from '@emotion/css';

const styles = {
  settingsPage: css`
    max-width: 800px;
    margin: 0 auto;
    padding: 24px;

    @media (max-width: 768px) {
      max-width: 100%;
      padding: 16px;
    }
  `,
  settingsSection: css`
    padding: 16px 0;

    h2 {
      font-size: 18px;
      margin-bottom: 24px;
      color: var(--ant-primary-7);
      display: flex;
      align-items: center;
      gap: 8px;

      .anticon {
        font-size: 20px;
      }
    }
  `,
  settingItem: css`
    margin-bottom: 16px;
    max-width: 400px;

    .ant-form-item-label > label {
      font-weight: 500;
      color: var(--ant-primary-6);
    }

    @media (max-width: 768px) {
      max-width: 100%;
    }
  `,
  divider: css`
    margin: 8px 0;
  `
};

const Settings: React.FC = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const handleSettingChange = (setting: string, value: boolean) => {
    message.success(t('settings.saved'));
  };

  return (
    <div className={styles.settingsPage}>
      <div className={styles.settingsSection}>
        <h2>
          <BellOutlined /> {t('settings.notifications')}
        </h2>
        <Form form={form} layout="vertical">
          <Form.Item 
            label={t('settings.enableNotifications')}
            name="notifications"
            className={styles.settingItem}
          >
            <Switch 
              defaultChecked 
              onChange={(checked) => handleSettingChange('notifications', checked)}
            />
          </Form.Item>
        </Form>
      </div>

      <Divider className={styles.divider} />

      <div className={styles.settingsSection}>
        <h2>
          <PoweroffOutlined /> {t('settings.system')}
        </h2>
        <Form form={form} layout="vertical">
          <Form.Item 
            label={t('settings.autoStart')}
            name="autoStart"
            className={styles.settingItem}
          >
            <Switch 
              onChange={(checked) => handleSettingChange('autoStart', checked)}
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Settings;
