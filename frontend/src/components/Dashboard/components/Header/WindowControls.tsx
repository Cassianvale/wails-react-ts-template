import React from 'react';
import { Button } from 'antd';
import { 
  MinusOutlined, 
  CloseOutlined, 
  BorderOutlined, 
  PushpinOutlined, 
  PushpinFilled 
} from '@ant-design/icons';
import { GreetService } from '../../../../../bindings/changeme';

interface WindowControlsProps {
  isAlwaysOnTop: boolean;
  onAlwaysOnTopChange: (isAlwaysOnTop: boolean) => void;
}

const WindowControls: React.FC<WindowControlsProps> = ({
  isAlwaysOnTop,
  onAlwaysOnTopChange,
}) => {
  const handleAlwaysOnTop = () => {
    const newState = !isAlwaysOnTop;
    onAlwaysOnTopChange(newState);
    GreetService.SetAlwaysOnTop(newState);
  };

  return (
    <>
      <Button 
        type="text" 
        icon={isAlwaysOnTop ? <PushpinFilled /> : <PushpinOutlined />} 
        onClick={handleAlwaysOnTop}
        size="small"
        className="header-button"
      />
      <Button 
        type="text" 
        icon={<MinusOutlined />} 
        onClick={() => GreetService.Minimize()}
        size="small"
        className="header-button"
      />
      <Button 
        type="text" 
        icon={<BorderOutlined />} 
        onClick={() => GreetService.Maximize()}
        size="small"
        className="header-button"
      />
      <Button 
        type="text" 
        icon={<CloseOutlined />} 
        onClick={() => GreetService.Close()}
        size="small"
        className="header-button header-button-danger"
        danger
      />
    </>
  );
};

export default WindowControls;
