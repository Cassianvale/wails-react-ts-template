import React from 'react';
import { Layout, Card } from 'antd';

const { Content } = Layout;

interface DashboardContentProps {
  children?: React.ReactNode;
}

const DashboardContent: React.FC<DashboardContentProps> = React.memo(({ children }) => {
  return (
    <Content className="dashboard-content">
      <Card className="content-card" bordered={false}>
        {children}
      </Card>
    </Content>
  );
});

DashboardContent.displayName = 'DashboardContent';

export default DashboardContent;
