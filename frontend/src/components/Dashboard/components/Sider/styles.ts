import styled from 'styled-components';
import { Layout, Avatar as AntAvatar } from 'antd';

const { Sider } = Layout;

/**
 * 侧边栏主样式组件
 * 1. 固定定位确保始终可见
 * 2. 添加阴影提升层次感
 * 3. 使用 spring 动画实现流畅的展开/收起过渡
 */
export const StyledSider = styled(Sider)`
  /* 固定定位 */
  position: fixed !important;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  height: 100vh;
  background-color: var(--color-bg-container) !important;
  /* spring 动画过渡 */
  transition: all var(--transition-duration) var(--spring-transition) !important;
  will-change: width, transform;
  /* 添加阴影 */
  box-shadow: var(--header-shadow);

  /* Sider 内容容器样式 */
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: ${props => props.collapsed ? '64px' : '200px'} !important;
    transition: width var(--transition-duration) var(--spring-transition);
    background-color: var(--color-bg-container);
    transition: background-color var(--transition-duration) var(--transition-timing);
  }

  /* 菜单容器样式 */
  .menu-container {
    flex: 1;
    border-inline-end: none !important;
    overflow-y: auto;
    overflow-x: hidden;
    margin-bottom: 56px;

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

    /* 菜单项基础样式 */
    .ant-menu-item {
      position: relative;
      padding: 0 16px;
      margin: 4px 0px;
      border-radius: 8px;
      transition: all 0.3s var(--spring-transition);
      color: var(--sidebar-font-color-unselected) !important;
      overflow: hidden;

      /* 左侧指示条样式 */
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%) scaleY(0.6);
        height: 65%;
        width: 4px;
        background-color: var(--sidebar-indicator-color);
        border-radius: 0 4px 4px 0;
        transition: all 0.3s var(--spring-transition);
        opacity: 0;
      }

      /* 菜单项背景动画效果 */
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--ant-primary-1);
        opacity: 0;
        transition: opacity 0.3s var(--bounce-transition);
        z-index: -1;
      }

      /* 菜单项文本动画 */
      .ant-menu-title-content {
        transition: all 0.3s var(--spring-transition);
      }

      /* 悬浮状态样式 */
      &:hover {
        color: var(--sidebar-font-color-selected) !important;
        transform: translateX(4px);

        &::before {
          opacity: 0.8;
          transform: translateY(-50%) scaleY(0.8);
        }

        &::after {
          opacity: 0.1;
        }
      }

      /* 选中状态样式 */
      &.ant-menu-item-selected {
        background-color: var(--ant-primary-1);
        color: var(--sidebar-font-color-selected) !important;
        transform: translateX(4px);
        

        &::before {
          opacity: 1;
          transform: translateY(-50%) scaleY(1);
        }

        &::after {
          opacity: 0.15;
        }

        .ant-menu-title-content {
          transform: translateX(4px);
        }
      }
    }
  }

  /* 折叠状态下的特殊样式 */
  &.ant-layout-sider-collapsed {
    .menu-container {
      .ant-menu-item {
        padding: 0 20px;
        margin: 4px 2px;
        
        /* 折叠状态文本动画 */
        .ant-menu-title-content {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s var(--spring-transition);
        }

        /* 折叠状态悬浮效果 */
        &:hover {
          transform: translateX(2px) scale(1.1);
        }

        /* 折叠状态选中样式 */
        &.ant-menu-item-selected {
          transform: translateX(2px);
          
          &:hover {
            transform: translateX(2px) scale(1.1);
          }
        }
      }
    }
  }
`;

/**
 * Logo 容器样式
 * 1. 响应式宽度适应折叠状态
 * 2. 添加悬浮动画效果
 */
export const StyledLogo = styled.div<{ $collapsed: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props => props.$collapsed ? '16px 20px' : '16px'};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s var(--spring-transition);
  width: ${props => props.$collapsed ? 'var(--sidebar-width-collapsed)' : 'var(--sidebar-width-expanded)'};
  
  /* Logo 悬浮效果 */
  &:hover {
    opacity: 0.85;
    transform: scale(0.98);
  }
`;

/**
 * Logo 图标样式
 * 1. 固定尺寸确保图标显示一致
 * 2. 添加抖动动画效果
 */
export const LogoIcon = styled.div<{ $isShaking?: boolean }>`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Logo 图片样式及动画 */
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: ${props => props.$isShaking ? 'shake 0.5s var(--bounce-transition)' : 'none'};
    transform-origin: center;
    will-change: transform;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
  }
`;

/**
 * Logo 文字样式
 * 1. 响应式显示/隐藏
 * 2. 平滑的位移和透明度过渡
 */
export const LogoText = styled.div<{ $collapsed: boolean }>`
  margin-left: 12px;
  font-size: 18px;
  font-weight: 600;
  color: var(--logo-color);
  white-space: nowrap;
  opacity: ${props => props.$collapsed ? 0 : 1};
  transform: translateX(${props => props.$collapsed ? '-10px' : '0'});
  transition: all 0.3s var(--spring-transition);
  will-change: transform, opacity;
`;

// 用户资料区域样式
export const StyledUserProfile = styled.div<{ $collapsed: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.3s var(--spring-transition);
  position: relative;
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-container);

  &:hover {
    background: var(--color-bg-hover);
  }

  ${props => props.$collapsed && `
    padding: 12px;
    justify-content: center;
  `}
`;

export const UserAvatar = styled(AntAvatar)`
  flex-shrink: 0;
  border: 2px solid transparent;
  transition: all 0.3s var(--spring-transition);
  background-color: var(--ant-primary-color);
  position: relative;

  &:hover {
    border-color: var(--ant-primary-color);
    transform: scale(1.05);
  }
`;

export const UserInfo = styled.div<{ $collapsed: boolean }>`
  flex: 1;
  min-width: 0;
  margin-left: ${props => props.$collapsed ? '0' : '12px'};
  overflow: hidden;
  opacity: ${props => props.$collapsed ? '0' : '1'};
  max-width: ${props => props.$collapsed ? '0' : '124px'};
  transition: all 0.3s var(--spring-transition);
  will-change: transform, opacity, max-width;
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: var(--ant-color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 2px;
`;

export const StatusBadge = styled.span<{ $status: 'online' | 'offline' | 'busy' }>`
  position: relative;
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.$status) {
      case 'online':
        return '#52c41a';
      case 'busy':
        return '#faad14';
      default:
        return '#ff4d4f';
    }
  }};
  transition: transform 0.3s ease;

  ${StyledUserProfile}:hover & {
    transform: scale(1.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: currentColor;
    opacity: 0.4;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: currentColor;
    animation: ripple 2s ease-out infinite;
    opacity: 0;
  }

  @keyframes ripple {
    0% {
      width: 100%;
      height: 100%;
      opacity: 0.3;
    }
    100% {
      width: 300%;
      height: 300%;
      opacity: 0;
    }
  }
`;

export const UserStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--ant-color-text-secondary);
  white-space: nowrap;
  transition: color 0.3s var(--transition-timing);
  opacity: 0.85;

  ${StyledUserProfile}:hover & {
    opacity: 1;
  }
`;