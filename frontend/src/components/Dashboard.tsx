import React, { useState, useContext, useMemo } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  KeyOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  EditOutlined,
  UserSwitchOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Avatar, Dropdown } from 'antd';
import { ThemeContext } from '../App';
import type { MenuProps } from 'antd';
import testAvatar from '../assets/images/test_avatar.png';

const { Header, Sider, Content } = Layout;

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token } = theme.useToken();
  const { themeMode } = useContext(ThemeContext);
  const [selectedKey, setSelectedKey] = useState('1');

  // 使用 useMemo 缓存菜单项
  const menuItems = useMemo(() => [
    {
      key: '1',
      icon: <UserOutlined />,
      label: '主页',
      className: `relative group ${selectedKey === '1' ? 'menu-item-selected' : ''}`,
    },
    {
      key: '2',
      icon: <KeyOutlined />,
      label: '按键模拟',
      className: `relative group ${selectedKey === '2' ? 'menu-item-selected' : ''}`,
    },
    {
      key: '3',
      icon: <VideoCameraOutlined />,
      label: '宏编辑器',
      className: `relative group ${selectedKey === '3' ? 'menu-item-selected' : ''}`,
    },
    {
      key: '4',
      icon: <SettingOutlined />,
      label: '模式设置',
      className: `relative group ${selectedKey === '4' ? 'menu-item-selected' : ''}`,
    },
    {
      key: '5',
      icon: <InfoCircleOutlined />,
      label: '关于',
      className: `relative group ${selectedKey === '4' ? 'menu-item-selected' : ''}`,
    },
    {
      key: '6',
      icon: <SettingOutlined />,
      label: '设置',
      className: `relative group ${selectedKey === '4' ? 'menu-item-selected' : ''}`,
    },
  ], [selectedKey]);

  // 用户菜单项
  const userMenuItems = [
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
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      danger: true,
    },
  ];

  const handleUserMenuClick = ({ key }: { key: string }) => {
    switch (key) {
      case 'logout':
        // 处理登出逻辑
        console.log('用户登出');
        break;
      case 'profile':
        // 处理查看个人信息
        console.log('查看个人信息');
        break;
      case 'edit':
        // 处理编辑资料
        console.log('编辑资料');
        break;
      case 'switch':
        // 处理切换账号
        console.log('切换账号');
        break;
    }
  };

  // 计算当前主题
  const currentTheme = themeMode === 'dark' ? 'dark' : 'light';
  
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setSelectedKey(e.key);
  };

  return (
    <Layout style={{ 
      height: '100%',
      background: token.colorBgContainer 
    }}>
      <style>
        {`
          .ant-menu-item {
            position: relative;
            margin: 4px 0 !important;
            border-radius: 6px !important;
            background: transparent !important;
          }
          
          .ant-menu {
            background: transparent !important;
          }
          
          .ant-menu-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 4px;
            transform: scaleY(0);
            background-color: ${token.colorPrimary};
            transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 0 4px 4px 0;
            transform-origin: center;
          }
          
          .ant-menu-item:hover::before {
            transform: scaleY(0.3);
          }
          
          .ant-menu-item-selected::before {
            transform: scaleY(0.6) !important;
          }
          
          .ant-menu-inline {
            border: none !important;
            background: transparent !important;
          }

          .ant-menu-item-active,
          .ant-menu-item:hover {
            background-color: ${token.colorBgTextHover} !important;
          }

          .ant-menu-item-selected {
            background-color: ${token.colorBgTextActive} !important;
          }

          .ant-layout-sider {
            border-inline-end: none !important;
          }

          .user-avatar-container {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-top: 1px solid ${token.colorBorder};
            background: ${token.colorBgContainer};
            transition: all 0.2s;
          }

          .user-avatar-container:hover {
            background: ${token.colorBgTextHover};
          }

          .user-info {
            opacity: ${collapsed ? 0 : 1};
            transition: opacity 0.2s;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}
      </style>
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        theme={currentTheme}
        style={{
          overflow: 'auto',
          height: 'calc(100% - var(--title-bar-height))',
          position: 'fixed',
          left: 0,
          top: 'var(--title-bar-height)',
          bottom: 0,
          paddingBottom: 64,
          background: token.colorBgContainer,
        }}
        className="transition-all duration-200 ease-in-out"
      >
        <div style={{ 
          height: 32, 
          margin: 16, 
          background: token.colorPrimary,
          opacity: 0.2,
          borderRadius: token.borderRadius 
        }} />
        <Menu
          theme={currentTheme}
          mode="inline"
          selectedKeys={[selectedKey]}
          items={menuItems}
          onClick={handleMenuClick}
          className="px-2 transition-colors duration-200"
          style={{
            background: 'transparent'
          }}
        />
        <div className="user-avatar-container">
          <Dropdown 
            menu={{ 
              items: userMenuItems,
              onClick: handleUserMenuClick,
            }}
            trigger={['click']}
            placement="topRight"
            arrow={{ pointAtCenter: true }}
          >
            <div>
              <Avatar
                size={collapsed ? 32 : 40}
                src={testAvatar}
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              />
            </div>
          </Dropdown>
          {!collapsed && (
            <div className="user-info">
              <div style={{ 
                color: token.colorText,
                fontSize: '14px',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                
              }}>
                CassianVale
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: token.colorSuccess,
                  boxShadow: `0 0 0 2px ${token.colorBgContainer}`,
                }} />
              </div>
              <div style={{ 
                color: token.colorTextSecondary,
                fontSize: '12px' 
              }}>
                在线
              </div>
            </div>
          )}
        </div>
      </Sider>
      <Layout style={{ 
        marginLeft: collapsed ? 80 : 200,
        transition: 'margin-left 0.2s',
        background: 'transparent',
        minHeight: 'calc(100vh - var(--title-bar-height))'
      }}>
        <Header style={{ 
          padding: 0, 
          background: 'transparent',
          height: 48,
          lineHeight: '48px',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 48,
              height: 48,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '8px',
            padding: 16,
            background: token.colorBgElevated,
            borderRadius: token.borderRadius,
            minHeight: 280,
            overflow: 'auto',
            position: 'relative',
            boxShadow: token.boxShadow
          }}
        >
          内容区域
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;