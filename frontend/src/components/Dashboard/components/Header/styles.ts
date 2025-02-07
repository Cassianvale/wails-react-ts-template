import styled from 'styled-components';
import { Layout, Button } from 'antd';

const { Header } = Layout;

export const StyledHeader = styled(Header)`
  padding: 0;
  background: var(--color-bg-container);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  line-height: 48px;
  position: sticky;
  top: 0;
  z-index: 99;
  --wails-draggable: drag;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(8px);
  transition: background-color var(--transition-duration) var(--transition-timing);
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4px;
  height: 100%;
  --wails-draggable: no-drag;
  transition: padding var(--transition-duration) var(--spring-transition);
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  gap: 10px;
  height: 100%;
  --wails-draggable: no-drag;
  transition: padding var(--transition-duration) var(--spring-transition);
`;

export const HeaderDivider = styled.div`
  width: 1px;
  height: 20px;
  background: var(--ant-primary-1);
  margin: 0 10px;
  opacity: 0.6;
  transition: background-color var(--transition-duration) var(--transition-timing);
`;

export const HeaderButton = styled(Button)<{ $danger?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 6px;
  cursor: pointer;
  margin: 0 2px;
  border: none;
  background: transparent;
  will-change: transform, background-color;
  transition: all 0.2s var(--spring-transition);

  &:hover {
    background-color: ${props => props.$danger ? 'var(--ant-color-error-bg)' : 'var(--ant-primary-1)'};
    color: ${props => props.$danger ? 'var(--ant-color-error)' : 'var(--ant-primary-color)'};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const TriggerButton = styled(Button)`
  padding: 0 16px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background: transparent;
  transition: all 0.2s var(--spring-transition);
  
  &:hover {
    color: var(--ant-primary-color);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
