import { ReactNode } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import LogoImage from '../../../../../assets/images/logo.svg';

interface LogoConfig {
  icon?: ReactNode;
  title: string;
  logoPath?: string;
  onClick?: () => void;
}

export const logoConfig: LogoConfig = {
  icon: <AppstoreOutlined />,
  title: 'Wails3 Template',
  logoPath: LogoImage,
  onClick: () => {
    // 可以添加点击 logo 时的行为
    console.log('Logo clicked');
  }
};
