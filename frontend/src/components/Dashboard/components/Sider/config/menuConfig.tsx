import {
  UserOutlined,
  KeyOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  EditOutlined,
  UserSwitchOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const mainMenuItems = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'Home',
    type: 'item',
  },
  {
    key: '2',
    icon: <KeyOutlined />,
    label: 'Key Simulation',
    type: 'item',
  },
  {
    key: '3',
    icon: <VideoCameraOutlined />,
    label: 'Macro Editor',
    type: 'item',
  },
  {
    key: '4',
    icon: <SettingOutlined />,
    label: 'Mode Settings',
    type: 'item',
  },
  {
    key: '5',
    icon: <InfoCircleOutlined />,
    label: 'About',
    type: 'item',
  },
  {
    key: '6',
    icon: <SettingOutlined />,
    label: 'Settings',
    type: 'item',
  },
] as MenuItem[];

export const userMenuItems: MenuItem[] = [
  {
    key: 'profile',
    icon: <UserOutlined />,
    label: 'Profile',
  },
  {
    key: 'edit',
    icon: <EditOutlined />,
    label: 'Edit Profile',
  },
  {
    key: 'switch',
    icon: <UserSwitchOutlined />,
    label: 'Switch Account',
  },
  {
    key: 'divider',
    type: 'divider',
  },
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    label: 'Logout',
    danger: true,
  },
];