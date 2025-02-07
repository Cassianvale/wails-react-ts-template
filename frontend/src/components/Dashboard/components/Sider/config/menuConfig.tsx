import {
  UserOutlined,
  EditOutlined,
  UserSwitchOutlined,
  LogoutOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { routes } from '../../../../../routes/config';

type MenuItem = Required<MenuProps>['items'][number];

// 用户菜单项类型
export type UserMenuKey = 'profile' | 'settings' | 'edit' | 'switch' | 'logout';

// 用户菜单配置
const USER_MENU_CONFIG = {
  profile: {
    icon: <UserOutlined />,
    label: 'menu.profile'
  },
  settings: {
    icon: <SettingOutlined />,
    label: 'menu.settings'
  },
  edit: {
    icon: <EditOutlined />,
    label: 'menu.editProfile'
  },
  switch: {
    icon: <UserSwitchOutlined />,
    label: 'menu.switchAccount'
  },
  logout: {
    icon: <LogoutOutlined />,
    label: 'menu.logout',
    danger: true
  }
} as const;

// 主菜单项钩子
export const useMainMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();

  return routes.map(route => ({
    key: route.path,
    icon: route.icon,
    label: t(route.label || ''),
    type: 'item'
  }));
};

// 用户菜单项钩子
export const useUserMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();

  const items: MenuItem[] = [
    {
      key: 'profile',
      icon: USER_MENU_CONFIG.profile.icon,
      label: t(USER_MENU_CONFIG.profile.label)
    },
    {
      key: 'settings',
      icon: USER_MENU_CONFIG.settings.icon,
      label: t(USER_MENU_CONFIG.settings.label)
    },
    {
      type: 'divider'
    },
    {
      key: 'logout',
      icon: USER_MENU_CONFIG.logout.icon,
      label: t(USER_MENU_CONFIG.logout.label),
      danger: true
    }
  ];

  return items;
};

// 用户菜单点击处理函数
export const handleUserMenuClick = (key: UserMenuKey): void => {
  switch (key) {
    case 'profile':
      console.log('查看个人信息');
      break;
    case 'settings':
      console.log('打开设置');
      break;
    case 'edit':
      console.log('编辑个人信息');
      break;
    case 'switch':
      console.log('切换账号');
      break;
    case 'logout':
      console.log('退出登录');
      break;
    default:
      break;
  }
};
