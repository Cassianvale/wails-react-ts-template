import {
  UserOutlined,
  KeyOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  EditOutlined,
  UserSwitchOutlined,
  LogoutOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';

type MenuItem = Required<MenuProps>['items'][number];

export const useMainMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();

  return [
    {
      key: '/home',
      icon: <HomeOutlined />,
      label: t('menu.home'),
      type: 'item',
    },
    {
      key: '/key-simulation',
      icon: <KeyOutlined />,
      label: t('menu.keySimulation'),
      type: 'item',
    },
    {
      key: '/macro-editor',
      icon: <VideoCameraOutlined />,
      label: t('menu.macroEditor'),
      type: 'item',
    },
    {
      key: '/mode-settings',
      icon: <SettingOutlined />,
      label: t('menu.modeSettings'),
      type: 'item',
    },
    {
      key: '/about',
      icon: <InfoCircleOutlined />,
      label: t('menu.about'),
      type: 'item',
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: t('menu.settings'),
      type: 'item',
    },
  ];
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