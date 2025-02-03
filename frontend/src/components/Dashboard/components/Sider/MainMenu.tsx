import React, { useMemo } from 'react';
import { Menu } from 'antd';
import { useMainMenuItems } from './config/menuConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/menu.css';

interface MainMenuProps {
  theme?: 'light' | 'dark';
  collapsed: boolean;
}

const MainMenu: React.FC<MainMenuProps> = ({ theme = 'light', collapsed }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const mainMenuItems = useMainMenuItems();

  const menuItems = useMemo(() => {
    return mainMenuItems.map((item: any) => ({
      key: item.key,
      icon: item.icon,
      label: item.label,
      onClick: () => navigate(item.key),
    }));
  }, [mainMenuItems, navigate]);

  return (
    <div className="menu-container">
      <Menu
        theme={theme}
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        inlineCollapsed={collapsed}
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default MainMenu;