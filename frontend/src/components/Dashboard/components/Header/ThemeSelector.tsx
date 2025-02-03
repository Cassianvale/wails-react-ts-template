import React from 'react';
import { Dropdown, Button } from 'antd';
import { useThemeMenuItems, getThemeIcon } from './config/menuConfig';

interface ThemeSelectorProps {
  themeMode: 'system' | 'light' | 'dark';
  onThemeChange: (theme: 'system' | 'light' | 'dark') => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  themeMode,
  onThemeChange,
}) => {
  const themeMenuItems = useThemeMenuItems(themeMode);

  const handleThemeChange = ({ key }: { key: string }) => {
    onThemeChange(key as 'system' | 'light' | 'dark');
  };

  return (
    <Dropdown
      menu={{
        items: themeMenuItems,
        onClick: handleThemeChange,
        selectedKeys: [themeMode],
      }}
      placement="bottomRight"
      trigger={['click']}
    >
      <Button
        type="text"
        icon={getThemeIcon(themeMode)}
        className="header-button"
        size="small"
      />
    </Dropdown>
  );
};

export default ThemeSelector;
