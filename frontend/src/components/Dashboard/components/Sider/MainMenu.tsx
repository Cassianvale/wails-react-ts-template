import React from 'react';
import { Menu } from 'antd';
import { mainMenuItems } from '../../config/menuConfig';
import type { MenuProps } from 'antd';
import '../../styles/menu.css';

interface MainMenuProps {
  theme: 'dark' | 'light';
  selectedKey: string;
  onSelect: (key: string) => void;
}

const MainMenu: React.FC<MainMenuProps> = React.memo(({ theme, selectedKey, onSelect }) => {
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    onSelect(e.key);
  };

  return (
    <Menu
      theme={theme}
      mode="inline"
      selectedKeys={[selectedKey]}
      items={mainMenuItems}
      onClick={handleMenuClick}
      className="menu-container ant-menu"
    />
  );
});

MainMenu.displayName = 'MainMenu';

export default MainMenu; 