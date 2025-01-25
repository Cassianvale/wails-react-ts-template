import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const themeMenuItems: MenuItem[] = [
  {
    key: 'system',
    label: 'Follow System',
    icon: <BulbOutlined />,
  },
  {
    key: 'light',
    label: 'Light Mode',
    icon: <BulbFilled style={{ color: '#faad14' }} />,
  },
  {
    key: 'dark',
    label: 'Dark Mode', 
    icon: <BulbFilled style={{ color: '#177ddc' }} />,
  },
] as MenuItem[];

export const getThemeIcon = (themeMode: string) => {
  switch (themeMode) {
    case 'light':
      return <BulbFilled style={{ color: '#faad14' }} />;
    case 'dark':
      return <BulbFilled style={{ color: '#177ddc' }} />;
    default:
      return <BulbOutlined />;
  }
}; 