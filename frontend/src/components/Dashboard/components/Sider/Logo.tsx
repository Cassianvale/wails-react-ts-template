import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLogo, LogoIcon, LogoText } from './styles';
import logo from '../../../../assets/images/logo.svg';

interface LogoProps {
  collapsed: boolean;
}

const Logo: React.FC<LogoProps> = ({ collapsed }) => {
  const navigate = useNavigate();
  const [isShaking, setIsShaking] = useState(false);
  const timerRef = useRef<number>();

  // 清理定时器的函数
  const clearShakeTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = undefined;
    }
  };

  // 开始震动动画
  const startShakeAnimation = () => {
    // 清理之前的定时器，支持动画打断
    clearShakeTimer();
    
    // 立即设置震动状态
    setIsShaking(true);
    
    // 设置新的定时器
    timerRef.current = window.setTimeout(() => {
      setIsShaking(false);
      timerRef.current = undefined;
    }, 500);
  };

  // 监听collapsed变化，触发动画
  useEffect(() => {
    startShakeAnimation();
    // 组件卸载时清理定时器
    return clearShakeTimer;
  }, [collapsed]);

  const handleLogoClick = () => {
    startShakeAnimation();
    navigate('/home');
  };

  return (
    <StyledLogo $collapsed={collapsed} onClick={handleLogoClick}>
      <LogoIcon $isShaking={isShaking}>
        <img src={logo} alt="Logo" />
      </LogoIcon>
      <LogoText $collapsed={collapsed}>
        Wails Template
      </LogoText>
    </StyledLogo>
  );
};

export default Logo;
