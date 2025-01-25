import { Typography } from 'antd';

interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return (
    <Typography.Title level={2} style={{ marginBottom: 16 }}>
      {children}
    </Typography.Title>
  );
}

export default Title;
