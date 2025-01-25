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
    label: '主页',
    type: 'item',
  },
  {
    key: '2',
    icon: <KeyOutlined />,
    label: '按键模拟',
    type: 'item',
  },
  {
    key: '3',
    icon: <VideoCameraOutlined />,
    label: '宏编辑器',
    type: 'item',
  },
  {
    key: '4',
    icon: <SettingOutlined />,
    label: '模式设置',
    type: 'item',
  },
  {
    key: '5',
    icon: <InfoCircleOutlined />,
    label: '关于',
    type: 'item',
  },
  {
    key: '6',
    icon: <SettingOutlined />,
    label: '设置',
    type: 'item',
  },
] as MenuItem[];

export const userMenuItems: MenuItem[] = [
  {
    key: 'profile',
    icon: <UserOutlined />,
    label: '个人信息',
  },
  {
    key: 'edit',
    icon: <EditOutlined />,
    label: '编辑资料',
  },
  {
    key: 'switch',
    icon: <UserSwitchOutlined />,
    label: '切换账号',
  },
  {
    key: 'divider',
    type: 'divider',
  },
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    label: '退出登录',
    danger: true,
  },
]; 