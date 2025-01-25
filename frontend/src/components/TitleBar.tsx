import { Space, Button, Typography } from 'antd';
import { MinusOutlined, CloseOutlined, BorderOutlined, PushpinOutlined, PushpinFilled } from '@ant-design/icons';
import { GreetService } from '../../bindings/changeme';
import { useState, CSSProperties } from 'react';

interface CustomCSSProperties extends CSSProperties {
  '--wails-draggable'?: string;
}

export default function TitleBar() {
  const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false);

  const handleAlwaysOnTop = () => {
    const newState = !isAlwaysOnTop;
    setIsAlwaysOnTop(newState);
    GreetService.SetAlwaysOnTop(newState);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#fff',
        padding: '8px',
        height: '32px',
        borderBottom: '1px solid #f0f0f0',
        position: 'relative',
        zIndex: 1000,
        '--wails-draggable': 'drag'
      } as CustomCSSProperties}
    >
      <Typography.Text strong>My Application</Typography.Text>
      <Space className="no-drag" style={{ '--wails-draggable': 'no-drag' } as CustomCSSProperties}>
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