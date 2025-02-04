import styled, { createGlobalStyle } from 'styled-components';
import { Layout } from 'antd';

/* 添加Logo关键帧动画 */
const shakeKeyframes = `
  @keyframes shake {
    0%, 100% {
      transform: rotate(0deg) scale(1);
    }
    10% {
      transform: rotate(-12deg) scale(1.1);
    }
    20% {
      transform: rotate(12deg) scale(1.1);
    }
    30% {
      transform: rotate(-12deg) scale(1.1);
    }
    40% {
      transform: rotate(12deg) scale(1.1);
    }
    50% {
      transform: rotate(-12deg) scale(1.05);
    }
    60% {
      transform: rotate(12deg) scale(1.05);
    }
    70% {
      transform: rotate(-6deg) scale(1.02);
    }
    80% {
      transform: rotate(6deg) scale(1.02);
    }
    90% {
      transform: rotate(-2deg) scale(1);
    }
    95% {
      transform: rotate(1deg) scale(1);
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${shakeKeyframes}
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
    --sidebar-font-color-selected: #000;  /* 默认选中菜单项字体颜色 */
    --sidebar-font-color-unselected: #666;  /* 默认未选中菜单项字体颜色 */
    --sidebar-indicator-color: var(--ant-primary-color);  /* 默认侧边指示条颜色 */
  }

  .theme-light {
    --logo-color: #213547;  /* 浅色模式下 Logo 颜色 */
    --sidebar-font-color-selected: #000;  /* 浅色模式下选中菜单项字体颜色 */
    --sidebar-font-color-unselected: #666;  /* 浅色模式下未选中菜单项字体颜色 */
    --sidebar-indicator-color: var(--ant-primary-color);  /* 浅色模式下侧边指示条颜色 */
  }

  .theme-dark {
    --logo-color: #ffffff;  /* 深色模式下 Logo 颜色 */
    --sidebar-font-color-selected: #ffffff;  /* 深色模式下选中菜单项字体颜色 */
    --sidebar-font-color-unselected: rgba(255, 255, 255, 0.65);  /* 深色模式下未选中菜单项字体颜色 */
    --sidebar-indicator-color: #ffffff;  /* 深色模式下侧边指示条颜色 */
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
