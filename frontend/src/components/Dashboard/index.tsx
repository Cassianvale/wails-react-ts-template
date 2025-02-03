import React, { useState, useContext } from 'react';
import { Layout, Button, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { ThemeContext } from '../../App';
import MainMenu from './components/Sider/MainMenu';
import UserProfile from './components/Sider/UserProfile';
import DashboardContent from './components/Content';
import ThemeSelector from './components/Header/ThemeSelector';
import WindowControls from './components/Header/WindowControls';
import Logo from './components/Sider/Logo';
import './styles/dashboard.css';
import './styles/menu.css';

const { Header, Sider } = Layout;

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');
  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false);
  const { token } = theme.useToken();
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  const currentTheme = themeMode === 'dark' ? 'dark' : 'light';

  return (
    <Layout className="dashboard-layout" style={{ background: token.colorBgContainer }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme={currentTheme}
        className="dashboard-sider"
        style={{ background: token.colorBgContainer }}
      >
        <Logo collapsed={collapsed} />
        <div className="dashboard-sider-menu">
          <MainMenu
            theme={currentTheme}
            selectedKey={selectedKey}
            onSelect={setSelectedKey}
          />
          <UserProfile collapsed={collapsed} theme={currentTheme} />
        </div>
      </Sider>
      <Layout
        className="dashboard-content-layout"
        style={{ marginLeft: collapsed ? 80 : 200 }}
      >
        <Header className="dashboard-header">
          <div className="header-left">
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
          </div>
          <div className="header-right">
            <ThemeSelector 
              themeMode={themeMode}
              onThemeChange={setThemeMode}
            />
            <div className="header-divider" />
            <WindowControls 
              isAlwaysOnTop={isAlwaysOnTop}
              onAlwaysOnTopChange={setIsAlwaysOnTop}
            />
          </div>
        </Header>
        <DashboardContent>
          Content
        </DashboardContent>
      </Layout>
    </Layout>
  );
};

export default Dashboard;