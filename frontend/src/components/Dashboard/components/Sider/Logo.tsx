import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLogo, LogoIcon, LogoText } from '../../styles';
import logo from '../../../../assets/images/logo.svg';

interface LogoProps {
  collapsed: boolean;
}

const Logo: React.FC<LogoProps> = ({ collapsed }) => {
  const navigate = useNavigate();

  return (
    <StyledLogo $collapsed={collapsed} onClick={() => navigate('/')}>
      <LogoIcon>
        <img src={logo} alt="Logo" />
      </LogoIcon>
      <LogoText $collapsed={collapsed}>
        Wails + React
      </LogoText>
    </StyledLogo>
  );
};

export default Logo;
