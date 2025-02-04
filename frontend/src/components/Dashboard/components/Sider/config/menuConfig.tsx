import {
  UserOutlined,
  EditOutlined,
  UserSwitchOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { routes } from '../../../../../routes/config';

type MenuItem = Required<MenuProps>['items'][number];

export const useMainMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();

  return routes.map(route => ({
    key: route.path,
    icon: route.icon,
    label: t(route.label || ''),
    type: 'item',
  }));
};

export const useUserMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();

  return [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: t('menu.profile'),
    },
    {
      key: 'edit',
      icon: <EditOutlined />,
      label: t('menu.editProfile'),
    },
    {
      key: 'switch',
      icon: <UserSwitchOutlined />,
      label: t('menu.switchAccount'),
    },
    {
      key: 'divider',
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: t('menu.logout'),
      danger: true,
    },
  ];
};
