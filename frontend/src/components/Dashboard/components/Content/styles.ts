import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const ContentLayout = styled(Layout)<{ $collapsed: boolean }>`
  position: relative;
  margin-left: ${props => props.$collapsed ? '64px' : '200px'};
  will-change: margin-left, transform;
  transform: translateZ(0);
  transition: margin-left var(--transition-duration) var(--spring-transition);
  backface-visibility: hidden;
`;

export const StyledContent = styled(Content)`
  padding: 20px;
  overflow: auto;
  position: relative;
  opacity: 0;
  animation: fadeIn 0.4s var(--bounce-transition) forwards;
  background-color: var(--content-bg-color);
  backdrop-filter: blur(10px);
  transition: background-color var(--transition-duration) var(--transition-timing);
  
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--ant-primary-3);
    border-radius: 3px;
    &:hover {
      background: var(--ant-primary-4);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ContentCard = styled.div`
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  background-color: var(--color-bg-container);
  margin-bottom: 20px;
  transition: transform 0.2s var(--spring-transition),
              box-shadow 0.2s var(--transition-timing),
              background-color 0.3s var(--transition-timing);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.1),
      0 2px 4px rgba(0, 0, 0, 0.08);
  }

  [data-theme='dark'] & {
    background-color: rgba(255, 255, 255, 0.04);
    box-shadow: 
      0 1px 3px rgba(0, 0, 0, 0.3),
      0 1px 2px rgba(0, 0, 0, 0.4);

    &:hover {
      background-color: rgba(255, 255, 255, 0.06);
      box-shadow: 
        0 4px 12px rgba(0, 0, 0, 0.4),
        0 2px 4px rgba(0, 0, 0, 0.3);
    }
  }
`;
