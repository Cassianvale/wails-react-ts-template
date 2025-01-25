import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const themeMenuItems: MenuItem[] = [
  {
    key: 'system',
    label: '跟随系统',
    icon: <BulbOutlined />,
  },
  {
    key: 'light',
    label: '浅色模式',
    icon: <BulbFilled style={{ color: '#faad14' }} />,
  },
  {
    key: 'dark',
    label: '深色模式',
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