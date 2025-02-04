import { ConfigProvider, theme, Spin } from 'antd';
import { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Dashboard from './components/Dashboard/index';
import './i18n/config';

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
  const { i18n } = useTranslation();
  const [i18nInitialized, setI18nInitialized] = useState(false);

  useEffect(() => {
    const checkI18nInit = () => {
      if (i18n.isInitialized) {
        setI18nInitialized(true);
      } else {
        setTimeout(checkI18nInit, 100);
      }
    };
    checkI18nInit();
  }, [i18n]);

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

  if (!i18nInitialized) {
    return (
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <Spin size="large" />
      </div>
    );
  }

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
              --bg-color: ${isDark ? 'rgba(20, 20, 20, 0)' : 'rgba(255, 255, 255, 0)'};
            }
            body {
              background-color: transparent;
            }
          `}
        </style>
        <div 
          className={isDark ? 'theme-dark' : 'theme-light'}
          style={{ 
            display: 'flex', 
            flexDirection: 'column',
            height: '100vh',
            width: '100vw',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            backgroundColor: isDark ? 'rgba(20, 20, 20, 0.6)' : 'rgba(255, 255, 255, 0.6)',
          }}
        >
          <Dashboard />
        </div>
      </ThemeContext.Provider>
    </ConfigProvider>
  );
};

export default App;