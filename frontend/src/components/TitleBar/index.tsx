import React, { useState, useContext } from 'react';
import { Typography, theme } from 'antd';
import { ThemeContext } from '../../App';
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
      <Typography.Text strong>My Application</Typography.Text>
      <div className="title-bar-controls">
        <ThemeSelector 
          themeMode={themeMode}
          onThemeChange={setThemeMode}
        />
        <WindowControls 
          isAlwaysOnTop={isAlwaysOnTop}
          onAlwaysOnTopChange={setIsAlwaysOnTop}
        />
      </div>
    </div>
  );
};

export default TitleBar; 