import React, { useState, useContext, useCallback, useMemo } from 'react';
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
import { StyledSider } from './components/Sider/styles';
import { StyledHeader,HeaderLeft,HeaderRight,HeaderDivider,TriggerButton } from './components/Header/styles';
import { StyledContent, ContentLayout } from './components/Content/styles';
import { GlobalStyle, StyledLayout } from './GlobalStyles';
import { routes } from '../../routes/config';

const DashboardContent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false);
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  const navigate = useNavigate();
  const location = useLocation();
  const mainMenuItems = useMainMenuItems();

  // 缓存计算值
  const siderWidth = useMemo(() => ({
    collapsed: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sidebar-width-collapsed')),
    expanded: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sidebar-width-expanded'))
  }), []);

  // 缓存主题值
  const currentTheme = useMemo(() => themeMode === 'dark' ? 'dark' : 'light', [themeMode]);

  const handleMenuClick = useCallback(({ key }: { key: string }) => {
    navigate(key);
  }, [navigate]);

  const toggleSidebar = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <StyledLayout>
      <GlobalStyle />
      <StyledSider
        collapsible
        collapsed={!isExpanded}
        collapsedWidth={siderWidth.collapsed}
        width={siderWidth.expanded}
        trigger={null}
      >
        <Logo collapsed={!isExpanded} />
        <Menu
          className="dashboard-sider-menu menu-container"
          mode="inline"
          items={mainMenuItems}
          onClick={handleMenuClick}
          selectedKeys={[location.pathname]}
          theme={currentTheme}
        />
        <UserProfile
          collapsed={!isExpanded}
          theme={currentTheme}
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
            {routes.map(route => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
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