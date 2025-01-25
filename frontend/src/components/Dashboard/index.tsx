import React, { useState, useContext } from 'react';
import { Layout, Button, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, AppstoreOutlined } from '@ant-design/icons';
import { ThemeContext } from '../../App';
import MainMenu from './components/Sider/MainMenu';
import UserProfile from './components/Sider/UserProfile';
import DashboardContent from './components/Content';
import './styles/dashboard.css';
import './styles/menu.css';

const { Header, Sider } = Layout;

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1');
  const { token } = theme.useToken();
  const { themeMode } = useContext(ThemeContext);

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
        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">
            <AppstoreOutlined />
          </div>
          <div className="dashboard-logo-text">
            Wails Pro
          </div>
        </div>
        <MainMenu
          theme={currentTheme}
          selectedKey={selectedKey}
          onSelect={setSelectedKey}
        />
        <UserProfile collapsed={collapsed} theme={currentTheme} />
      </Sider>
      <Layout
        className="dashboard-content-layout"
        style={{ marginLeft: collapsed ? 80 : 200 }}
      >
        <Header className="dashboard-header">
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
        <DashboardContent>
          Content
        </DashboardContent>
      </Layout>
    </Layout>
  );
};

export default Dashboard; 