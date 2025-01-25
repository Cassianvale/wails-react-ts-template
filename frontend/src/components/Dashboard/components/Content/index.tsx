import React from 'react';
import { Layout, theme } from 'antd';

const { Content } = Layout;

interface DashboardContentProps {
  children?: React.ReactNode;
}

const DashboardContent: React.FC<DashboardContentProps> = React.memo(({ children }) => {
  const { token } = theme.useToken();

  return (
    <Content
      className="dashboard-content"
      style={{
        background: token.colorBgElevated,
        boxShadow: token.boxShadow,
      }}
    >
      {children}
    </Content>
  );
});

DashboardContent.displayName = 'DashboardContent';

export default DashboardContent; 