import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const ContentLayout = styled(Layout)<{ $collapsed: boolean }>`
  position: relative;
  margin-left: ${props => props.$collapsed ? '64px' : '200px'};
  transition: var(--transition-properties);
  will-change: margin-left;
  transform: translateZ(0);
  transition: var(--transition-properties);
`;

export const StyledContent = styled(Content)`
  padding: 16px;
  overflow: auto;
  position: relative;
  transition: var(--transition-properties);
  opacity: 0;
  animation: fadeIn 0.3s var(--transition-timing) forwards;
  background-color: var(--color-bg-container);
  transition: var(--transition-properties);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ContentCard = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03), 
              0 1px 6px -1px rgba(0, 0, 0, 0.02), 
              0 2px 4px 0 rgba(0, 0, 0, 0.02);
  background-color: var(--color-bg-container);
  margin-bottom: 16px;
`;
