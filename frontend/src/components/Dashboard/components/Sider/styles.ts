import styled from 'styled-components';
import { Layout } from 'antd';

const { Sider } = Layout;

/* 
 * 侧边栏样式组件
 * 包含侧边栏布局、折叠状态、菜单项等样式定义
 */
export const StyledSider = styled(Sider)`
  position: fixed !important;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  height: 100%;
  background-color: var(--color-bg-container) !important;
  transition: var(--transition-properties) !important;
  will-change: transform, opacity;

  /* 侧边栏子元素布局 */
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--color-bg-container);
    transition: var(--transition-properties);
    will-change: transform, opacity;
  }

  /* 菜单项基础样式 */
  .menu-container {
    .ant-menu-item {
      position: relative;
      padding: 0 20px;
      margin: 4px 4px;
      border-radius: 6px;
      transition: var(--transition-properties);
      will-change: transform, opacity;
      color: var(--sidebar-font-color-unselected) !important;

      /* 菜单项左侧指示条 */
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%) scaleY(0);
        height: 60%;
        width: 4px;
        background-color: var(--sidebar-indicator-color);
        border-radius: 0 5px 5px 0;
        transition: var(--transition-properties);
        opacity: 0;
        will-change: transform, opacity;
      }

      /* 菜单项悬停效果 */
      &:hover {
        background-color: var(--ant-primary-1) !important;
        opacity: 0.9;
        transform: scale(1.02);

        &::before {
          opacity: 0.6;
          transform: translateY(-50%) scaleY(1);
        }
      }

      /* 选中菜单项样式 */
      &.ant-menu-item-selected {
        background-color: var(--ant-primary-1) !important;
        transform: none;
        color: var(--sidebar-font-color-selected) !important;

        &::before {
          opacity: 1 !important;
          transform: translateY(-50%) scaleY(1) !important;
        }
      }
    }
  }

  /* 折叠状态下的样式 */
  &.ant-layout-sider-collapsed {
    .menu-container {
      .ant-menu-item {
        padding: 0 18px;
        margin: 4px 4px;
        opacity: 0.8;
        will-change: transform, opacity;

        /* 折叠状态下的菜单文本内容 */
        .ant-menu-title-content {
          opacity: 0;
          width: 0;
          margin-left: 0;
          transition: var(--transition-properties);
          will-change: transform, opacity;
        }
      }
    }
  }
`;

export const StyledLogo = styled.div<{ $collapsed: boolean }>`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition-properties);
  will-change: width, padding;
  width: ${props => props.$collapsed ? 'var(--sidebar-width-collapsed)' : 'var(--sidebar-width-expanded)'};
  
  &:hover {
    opacity: 0.8;
  }
`;

export const LogoIcon = styled.div<{ $isShaking?: boolean }>`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: ${props => props.$isShaking ? 'shake 0.5s cubic-bezier(0.36, 0, 0.66, -0.56)' : 'none'};
    transform-origin: center;
    will-change: transform;
    backface-visibility: hidden;
    perspective: 1000px;
    -webkit-font-smoothing: antialiased;
  }
`;

export const LogoText = styled.div<{ $collapsed: boolean }>`
  margin-left: 12px;
  font-size: 18px;
  font-weight: 600;
  color: var(--logo-color);
  white-space: nowrap;
  opacity: ${props => props.$collapsed ? 0 : 1};
  transform: translateX(${props => props.$collapsed ? '-20px' : '0'});
  transition: var(--transition-properties);
  will-change: transform, opacity;
`;