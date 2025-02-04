import styled, { createGlobalStyle } from 'styled-components';
import { Layout, Button } from 'antd';

const { Header, Content } = Layout;

export const GlobalStyle = createGlobalStyle`
  :root {
    --transition-duration: 0.2s;
    --transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
    --transition-properties: all var(--transition-duration) var(--transition-timing);
    --spring-transition: cubic-bezier(0.68, -0.6, 0.32, 1.6);
    --bounce-transition: cubic-bezier(0.37, 0, 0.63, 1.4);
    --sidebar-width-expanded: 200px;
    --sidebar-width-collapsed: 64px;
    --color-bg-container: var(--ant-color-bg-container);
    --color-bg-container-hover: var(--ant-color-bg-container-hover);
  }

  .theme-light {
    --logo-color: #213547;
  }

  .theme-dark {
    --logo-color: #ffffff;
  }

  .ant-layout-sider,
  .dashboard-sider-menu,
  .ant-layout-sider-children,
  .ant-layout-header,
  .ant-layout-content {
    background-color: var(--color-bg-container) !important;
    transition: var(--transition-properties) !important;
  }

  .ant-layout {
    transition: var(--transition-properties) !important;
  }

  .ant-layout-sider {
    border-right: none !important;
  }

  .ant-menu {
    border-inline-end: none !important;
  }
`;

export const StyledLayout = styled(Layout)`
  height: 100vh;
  transition: var(--transition-properties);
`;

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
  transition: var(--transition-properties);

  .ant-card-body {
    padding: 20px;
  }
`;

export const ContentLayout = styled(Layout)<{ $collapsed: boolean }>`
  position: relative;
  margin-left: ${props => props.$collapsed ? '64px' : '200px'};
  transition: var(--transition-properties);
  will-change: margin-left;
  transform: translateZ(0);
  transition: var(--transition-properties);
`;

export const StyledLogo = styled.div<{ $collapsed: boolean }>`
  height: 48px;
  padding: ${props => props.$collapsed ? '8px' : '16px'};
  display: flex;
  align-items: center;
  justify-content: ${props => props.$collapsed ? 'center' : 'flex-start'};
  cursor: pointer;
  overflow: hidden;
  transition: all var(--transition-duration) var(--spring-transition);
  will-change: transform;
  transition: var(--transition-properties);
  
  &:hover {
    transform: scale(1.02);
  }
`;

export const LogoIcon = styled.div<{ $collapsed?: boolean }>`
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  transition: all var(--transition-duration) var(--spring-transition);
  will-change: transform;
  transition: var(--transition-properties);

  img {
    width: ${props => props.$collapsed ? '24px' : '32px'};
    height: ${props => props.$collapsed ? '24px' : '32px'};
    object-fit: contain;
    transition: all var(--transition-duration) var(--spring-transition);
  }
`;

export const LogoText = styled.div<{ $collapsed: boolean }>`
  margin-left: 12px;
  font-size: 16px;
  font-weight: 600;
  color: var(--logo-color);
  white-space: nowrap;
  opacity: ${props => props.$collapsed ? 0 : 1};
  transform: translateX(${props => props.$collapsed ? '-20px' : 0});
  transition: all var(--transition-duration) var(--spring-transition);
  visibility: ${props => props.$collapsed ? 'hidden' : 'visible'};
  position: absolute;
  left: 48px;
  transition: var(--transition-properties);
`;
