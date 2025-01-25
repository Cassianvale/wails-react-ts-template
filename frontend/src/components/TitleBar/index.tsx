import React, { useState, useContext } from 'react';
import { Typography, theme } from 'antd';
import { ThemeContext } from '../../App';
import { AppstoreOutlined } from '@ant-design/icons';
import ThemeSelector from './components/ThemeSelector';
import WindowControls from './components/WindowControls';
import './styles/titleBar.css';

interface CustomCSSProperties extends React.CSSProperties {
  '--wails-draggable'?: string;
}

const TitleBar: React.FC = () => {
  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false);
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  const { token } = theme.useToken();

  return (
    <div
      className="title-bar"
      style={{
        background: token.colorBgContainer,
        borderBottom: `1px solid ${token.colorBorderSecondary}`,
      } as CustomCSSProperties}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AppstoreOutlined style={{ fontSize: '16px', opacity: 0.85 }} />
        <Typography.Text className="title-bar-title">
          My Application
        </Typography.Text>
      </div>
      <div className="title-bar-controls">
        <ThemeSelector 
          themeMode={themeMode}
          onThemeChange={setThemeMode}
        />
        <div className="title-bar-divider" />
        <WindowControls 
          isAlwaysOnTop={isAlwaysOnTop}
          onAlwaysOnTopChange={setIsAlwaysOnTop}
        />
      </div>
    </div>
  );
};

export default TitleBar; 