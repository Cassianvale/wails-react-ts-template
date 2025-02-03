import React from 'react';
import { Button, Dropdown } from 'antd';
import { ThemeMode } from '../../../../App';
import { themeMenuItems, getThemeIcon } from './config/menuConfig';

interface ThemeSelectorProps {
  themeMode: ThemeMode;
  onThemeChange: (mode: ThemeMode) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  themeMode,
  onThemeChange,
}) => {
  const handleThemeChange = ({ key }: { key: string }) => {
    onThemeChange(key as ThemeMode);
  };

  return (
    <Dropdown 
      menu={{ 
        items: themeMenuItems, 
        onClick: handleThemeChange,
        selectedKeys: [themeMode]
      }} 
      placement="bottomRight"
      trigger={['click']}
    >
      <Button 
        type="text"
        icon={getThemeIcon(themeMode)}
        size="small"
        className="header-button"
      />
    </Dropdown>
  );
};

export default ThemeSelector;
