import styled, { createGlobalStyle } from 'styled-components';
import { Layout } from 'antd';

const shakeKeyframes = `
  @keyframes shake {
    0%, 100% {
      transform: rotate(0deg) scale(1);
    }
    10%, 30% {
      transform: rotate(-12deg) scale(1.1);
    }
    20%, 40% {
      transform: rotate(12deg) scale(1.1);
    }
    50%, 70% {
      transform: rotate(-8deg) scale(1.05);
    }
    60%, 80% {
      transform: rotate(8deg) scale(1.05);
    }
    85% {
      transform: rotate(-4deg) scale(1.02);
    }
    90% {
      transform: rotate(4deg) scale(1.02);
    }
    95% {
      transform: rotate(-2deg) scale(1);
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${shakeKeyframes}
  
  :root {
    /* 动画变量 */
    --transition-duration: 0.25s;
    --transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
    --spring-transition: cubic-bezier(0.68, -0.6, 0.32, 1.6);
    --bounce-transition: cubic-bezier(0.37, 0, 0.63, 1.4);
    
    /* 布局变量 */
    --sidebar-width-expanded: 200px;
    --sidebar-width-collapsed: 64px;
    --header-height: 48px;
    
    /* 颜色变量 */
    --color-bg-container: var(--ant-color-bg-container);
    --color-bg-container-hover: var(--ant-color-bg-container-hover);
    --color-text-primary: var(--ant-color-text);
    --color-text-secondary: var(--ant-color-text-secondary);
    --color-border: var(--ant-color-border);
    --layout-bg-light: #ffffff;
    --layout-bg-dark: #141414;
    
    /* 阴影变量 */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .theme-light {
    --font-text-color: #213547;
    --sidebar-font-color-selected: var(--ant-color-text);
    --sidebar-font-color-unselected: var(--ant-color-text-secondary);
    --sidebar-indicator-color: var(--ant-primary-color);
    --content-bg-color: rgba(19, 14, 41, 0.03);
    --glow-color: rgba(114, 137, 218, 0.5);
    --layout-bg: var(--layout-bg-light);
    
    --header-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    --card-shadow: 
      0 1px 3px rgba(0, 0, 0, 0.05),
      0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .theme-dark {
    --font-text-color: #ffffff;
    --sidebar-font-color-selected: rgba(255, 255, 255, 0.95);
    --sidebar-font-color-unselected: rgba(255, 255, 255, 0.65);
    --sidebar-indicator-color: #ffffff;
    --content-bg-color: rgba(130, 130, 130, 0.15);
    --glow-color: rgba(114, 137, 218, 0.5);
    --layout-bg: var(--layout-bg-dark);
    
    --header-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    --card-shadow: 
      0 1px 3px rgba(0, 0, 0, 0.2),
      0 1px 2px rgba(0, 0, 0, 0.3);
  }

  /* 全局滚动条样式 */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--ant-color-text-quaternary);
    border-radius: 3px;
    
    &:hover {
      background: var(--ant-color-text-tertiary);
    }
  }

  /* Layout 组件样式 */
  .ant-layout-sider,
  .dashboard-sider-menu,
  .ant-layout-sider-children,
  .ant-layout-header {
    background-color: var(--color-bg-container) !important;
    transition: all var(--transition-duration) var(--transition-timing) !important;
  }

  .ant-layout {
    transition: all var(--transition-duration) var(--transition-timing) !important;
    background-color: var(--layout-bg);
  }

  .ant-layout-sider {
    border-right: none !important;
    box-shadow: var(--header-shadow);
  }

  .ant-menu {
    border-inline-end: none !important;
    transition: all var(--transition-duration) var(--transition-timing) !important;
  }
  
  /* 添加平滑滚动 */
  html {
    scroll-behavior: smooth;
  }
`;

export const StyledLayout = styled(Layout)`
  height: 100vh;
  transition: all var(--transition-duration) var(--transition-timing);
`;
