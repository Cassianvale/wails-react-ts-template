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
  transition: var(--transition-properties);
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0px;
  height: 100%;
  --wails-draggable: no-drag;
  transition: var(--transition-properties);
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  gap: 8px;
  height: 100%;
  --wails-draggable: no-drag;
  transition: var(--transition-properties);
`;

export const HeaderDivider = styled.div`
  width: 1px;
  height: 16px;
  background: var(--ant-primary-1);
  margin: 0 8px;
  transition: var(--transition-properties);
`;

export const HeaderButton = styled(Button)<{ $danger?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 28px;
  padding: 0;
  border-radius: 4px;
  transition: var(--transition-properties);
  cursor: pointer;
  margin: 0 1px;
  will-change: background-color, transform;
  transform: translateZ(0);
  transition: var(--transition-properties);

  &:hover {
    background-color: ${props => props.$danger ? 'var(--ant-color-error-bg)' : 'var(--ant-primary-1)'};
    color: ${props => props.$danger && 'var(--ant-color-error)'};
    transform: scale(1.05);
  }
`;

export const TriggerButton = styled(Button)`
  padding: 0 16px;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s;
  transition: var(--transition-properties);
`;
