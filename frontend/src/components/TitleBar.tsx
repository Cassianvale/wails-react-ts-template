import { Space, Button, Typography, Dropdown, theme } from 'antd';
import { MinusOutlined, CloseOutlined, BorderOutlined, PushpinOutlined, PushpinFilled, 
  BulbOutlined, BulbFilled } from '@ant-design/icons';
import { GreetService } from '../../bindings/changeme';
import { useState, CSSProperties, useContext } from 'react';
import { ThemeContext, ThemeMode } from '../App';

interface CustomCSSProperties extends CSSProperties {
  '--wails-draggable'?: string;
}

export default function TitleBar() {
  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false);
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  const { token } = theme.useToken();

  const handleAlwaysOnTop = () => {
    const newState = !isAlwaysOnTop;
    setIsAlwaysOnTop(newState);
    GreetService.SetAlwaysOnTop(newState);
  };

  const themeItems = [
    {
      key: 'system',
      label: '跟随系统',
      icon: <BulbOutlined />,
    },
    {
      key: 'light',
      label: '浅色模式',
      icon: <BulbFilled style={{ color: '#faad14' }} />,
    },
    {
      key: 'dark',
      label: '深色模式',
      icon: <BulbFilled style={{ color: '#177ddc' }} />,
    },
  ];

  const handleThemeChange = ({ key }: { key: string }) => {
    setThemeMode(key as ThemeMode);
  };

  const getThemeIcon = () => {
    switch (themeMode) {
      case 'light':
        return <BulbFilled style={{ color: '#faad14' }} />;
      case 'dark':
        return <BulbFilled style={{ color: '#177ddc' }} />;
      default:
        return <BulbOutlined />;
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: token.colorBgContainer,
        padding: '8px',
        height: 'var(--title-bar-height)',
        borderBottom: `1px solid ${token.colorBorderSecondary}`,
        position: 'relative',
        zIndex: 1000,
        '--wails-draggable': 'drag'
      } as CustomCSSProperties}
    >
      <Typography.Text strong>My Application</Typography.Text>
      <Space className="no-drag" style={{ '--wails-draggable': 'no-drag' } as CustomCSSProperties}>
        <Dropdown 
          menu={{ 
            items: themeItems, 
            onClick: handleThemeChange,
            selectedKeys: [themeMode]
          }} 
          placement="bottomRight"
          trigger={['click']}
        >
          <Button 
            type="text"
            icon={getThemeIcon()}
            size="small"
          />
        </Dropdown>
        <Button 
          type="text" 
          icon={isAlwaysOnTop ? <PushpinFilled /> : <PushpinOutlined />} 
          onClick={handleAlwaysOnTop}
          size="small"
        />
        <Button 
          type="text" 
          icon={<MinusOutlined />} 
          onClick={() => GreetService.Minimize()}
          size="small"
        />
        <Button 
          type="text" 
          icon={<BorderOutlined />} 
          onClick={() => GreetService.Maximize()}
          size="small"
        />
        <Button 
          type="text" 
          icon={<CloseOutlined />} 
          onClick={() => GreetService.Close()}
          size="small"
          danger
        />
      </Space>
    </div>
  );
} 