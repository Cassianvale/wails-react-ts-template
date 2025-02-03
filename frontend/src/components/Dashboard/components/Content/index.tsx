import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

interface DashboardContentProps {
  children?: React.ReactNode;
}

const DashboardContent: React.FC<DashboardContentProps> = React.memo(({ children }) => {
  return (
    <Content className="dashboard-content">
      {children}
    </Content>
  );
});

DashboardContent.displayName = 'DashboardContent';

export default DashboardContent;