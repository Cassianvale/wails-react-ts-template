import React from 'react';
import { Form, Switch, Divider, message } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  BellOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

// 样式组件
const SettingsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 16px;
  }
`;

const SettingsSection = styled.div`
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
`;

const StyledFormItem = styled(Form.Item)`
  margin-bottom: 16px;
  max-width: 400px;

  .ant-form-item-label > label {
    font-weight: 500;
    color: var(--ant-primary-6);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StyledDivider = styled(Divider)`
  margin: 8px 0;
`;

const Settings: React.FC = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const handleSettingChange = (setting: string, value: boolean) => {
    message.success(t('settings.saved'));
  };

  return (
    <SettingsContainer>
      <SettingsSection>
        <h2>
          <BellOutlined /> {t('settings.notifications')}
        </h2>
        <Form form={form} layout="vertical">
          <StyledFormItem 
            label={t('settings.enableNotifications')}
            name="notifications"
          >
            <Switch 
              defaultChecked 
              onChange={(checked) => handleSettingChange('notifications', checked)}
            />
          </StyledFormItem>
        </Form>
      </SettingsSection>

      <StyledDivider />

      <SettingsSection>
        <h2>
          <PoweroffOutlined /> {t('settings.system')}
        </h2>
        <Form form={form} layout="vertical">
          <StyledFormItem 
            label={t('settings.autoStart')}
            name="autoStart"
          >
            <Switch 
              onChange={(checked) => handleSettingChange('autoStart', checked)}
            />
          </StyledFormItem>
        </Form>
      </SettingsSection>
    </SettingsContainer>
  );
};

export default Settings;
