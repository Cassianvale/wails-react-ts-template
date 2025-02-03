import React, { useState, useContext, useCallback } from 'react';
import { Layout, Menu, Button, Tooltip } from 'antd';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../App';
import Logo from './components/Sider/Logo';
import { useMainMenuItems } from './components/Sider/config/menuConfig';
import ThemeSelector from './components/Header/ThemeSelector';
import LanguageSelector from './components/Header/LanguageSelector';
import WindowControls from './components/Header/WindowControls';
import UserProfile from './components/Sider/UserProfile';
import Home from '../../pages/Home';
import Settings from '../../pages/Settings';
import './styles/dashboard.css';
import './styles/menu.css';

const { Header, Sider, Content } = Layout;

const DashboardContent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false);
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  if (!themeMode || !setThemeMode) {
    throw new Error('Theme context must be used within ThemeProvider');
  }

  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const mainMenuItems = useMainMenuItems();

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  const toggleSidebar = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <Layout className="dashboard-layout" style={{ background: 'var(--color-bg-container)' }}>
      <Sider
        className="dashboard-sider"
        collapsible
        collapsed={!isExpanded}
        collapsedWidth={parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--sidebar-width-collapsed'))}
        width={parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--sidebar-width-expanded'))}
        style={{ 
          background: 'var(--color-bg-container)',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0
        }}
        trigger={null}
      >
        <Logo collapsed={!isExpanded} />
        <Menu
          className="dashboard-sider-menu menu-container"
          mode="inline"
          items={mainMenuItems}
          onClick={handleMenuClick}
          selectedKeys={[location.pathname]}
          theme={themeMode === 'dark' ? 'dark' : 'light'}
        />
        <UserProfile
          collapsed={!isExpanded}
          theme={themeMode === 'dark' ? 'dark' : 'light'}
        />
      </Sider>
      <Layout
        className="dashboard-content-layout"
        style={{ 
          marginLeft: !isExpanded ? 64 : 200,
          transition: 'margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <Header className="dashboard-header">
          <div className="header-left">
            <Tooltip title={!isExpanded ? t('menu.expand') : t('menu.collapse')}>
              <Button
                type="text"
                icon={!isExpanded ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={toggleSidebar}
                className="trigger-button"
              />
            </Tooltip>
          </div>
          <div className="header-right">
            <LanguageSelector />
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
        <Content className="dashboard-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

const Dashboard: React.FC = () => {
  return (
    <Router>
      <DashboardContent />
    </Router>
  );
};

export default Dashboard;