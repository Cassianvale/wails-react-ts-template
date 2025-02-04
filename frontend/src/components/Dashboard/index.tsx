import React, { useState, useContext, useCallback } from 'react';
import { Menu } from 'antd';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { ThemeContext } from '../../App';
import Logo from './components/Sider/Logo';
import { useMainMenuItems } from './components/Sider/config/menuConfig';
import ThemeSelector from './components/Header/ThemeSelector';
import LanguageSelector from './components/Header/LanguageSelector';
import WindowControls from './components/Header/WindowControls';
import UserProfile from './components/Sider/UserProfile';
import Home from '../../pages/Home';
import Settings from '../../pages/Settings';
import { StyledSider } from './components/Sider/styles';
import {
  GlobalStyle,
  StyledLayout,
  StyledHeader,
  HeaderLeft,
  HeaderRight,
  HeaderDivider,
  TriggerButton,
  StyledContent,
  ContentLayout
} from './styles';

const DashboardContent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false);
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  if (!themeMode || !setThemeMode) {
    throw new Error('Theme context must be used within ThemeProvider');
  }

  const navigate = useNavigate();
  const location = useLocation();
  const mainMenuItems = useMainMenuItems();

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  const toggleSidebar = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <StyledLayout>
      <GlobalStyle />
      <StyledSider
        collapsible
        collapsed={!isExpanded}
        collapsedWidth={parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--sidebar-width-collapsed'))}
        width={parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--sidebar-width-expanded'))}
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
      </StyledSider>
      <ContentLayout $collapsed={!isExpanded}>
        <StyledHeader>
          <HeaderLeft>
            <TriggerButton
              type="text"
              icon={!isExpanded ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={toggleSidebar}
            />
          </HeaderLeft>
          <HeaderRight>
            <LanguageSelector />
            <ThemeSelector
              themeMode={themeMode}
              onThemeChange={setThemeMode}
            />
            <HeaderDivider />
            <WindowControls
              isAlwaysOnTop={isAlwaysOnTop}
              onAlwaysOnTopChange={setIsAlwaysOnTop}
            />
          </HeaderRight>
        </StyledHeader>
        <StyledContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </StyledContent>
      </ContentLayout>
    </StyledLayout>
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