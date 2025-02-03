import React from 'react';
import { logoConfig } from './config/logoConfig';

interface LogoProps {
  collapsed?: boolean;
}

const Logo: React.FC<LogoProps> = ({ collapsed }) => {
  return (
    <div className="dashboard-logo" onClick={logoConfig.onClick}>
      <div className="dashboard-logo-icon">
        {logoConfig.logoPath ? (
          <img src={logoConfig.logoPath} alt="logo" />
        ) : (
          logoConfig.icon
        )}
      </div>
      {!collapsed && (
        <div className="dashboard-logo-text">
          {logoConfig.title}
        </div>
      )}
    </div>
  );
};

export default Logo;
