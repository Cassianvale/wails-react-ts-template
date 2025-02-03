import { ConfigProvider, theme } from 'antd';
import { createContext, useState, useEffect } from 'react';
import Dashboard from './components/Dashboard/index';

export type ThemeMode = 'system' | 'dark' | 'light';

interface ThemeContextType {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  themeMode: 'system',
  setThemeMode: () => {},
});

const App = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (themeMode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDark(mediaQuery.matches);

      const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } else {
      setIsDark(themeMode === 'dark');
    }
  }, [themeMode]);

  const themeConfig = {
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      borderRadius: 6,
      colorPrimary: '#1890ff',
    },
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
        <style>
          {`
            :root {
              --ant-primary-color: ${themeConfig.token.colorPrimary || '#1890ff'};
              --ant-primary-1: ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)'};
              --bg-color: ${isDark ? '#141414' : '#ffffff'};
            }
          `}
        </style>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          height: '100vh',
          width: '100vw',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
        }}>
          <Dashboard />
        </div>
      </ThemeContext.Provider>
    </ConfigProvider>
  );
};

export default App;