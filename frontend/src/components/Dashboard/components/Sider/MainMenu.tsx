import React, { useMemo } from 'react';
import { Menu } from 'antd';
import { useMainMenuItems } from './config/menuConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface MainMenuProps {
  theme?: 'system' | 'light' | 'dark';
  collapsed: boolean;
}

const StyledMenuContainer = styled.div`
  height: calc(100% - 64px - 60px);
  border-right: none !important;
`;

const StyledMenu = styled(Menu)`
  &.ant-menu {
    padding: 4px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    background: transparent;
    border-inline-end: none !important;

    .ant-menu-item {
      position: relative;
      margin: 4px !important;
      padding: 0 16px !important;
      border-radius: 6px !important;
      background: transparent !important;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
      transform: none !important;
      will-change: background-color;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      height: 40px !important;
      line-height: 40px !important;

      .anticon {
        font-size: 18px;
        margin-right: ${props => props.collapsed ? '0' : '10px'};
        width: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .ant-menu-title-content {
        opacity: ${props => props.collapsed ? 0 : 1};
        transition: opacity 0.2s;
      }

      &.ant-menu-item-selected {
        background: var(--ant-primary-1) !important;
        
        .anticon {
          color: var(--ant-primary-color);
        }
      }

      &:hover {
        background: var(--ant-primary-1) !important;
      }
    }

    &.ant-menu-inline-collapsed {
      width: 64px;
      
      .ant-menu-item {
        padding: 0 0 0 24px !important;
        width: 56px;
        
        .ant-menu-title-content {
          display: none;
        }
      }
    }
  }

  &.ant-menu-inline {
    border: none !important;
    background: transparent !important;
  }

  .ant-layout-sider-collapsed & {
    .ant-menu-item {
      padding: 0;
      margin: 4px auto;
      width: 52px;
      justify-content: center;
      opacity: 0.8;

      .ant-menu-item-icon {
        margin: 0;
        font-size: 18px;
        transform: scale(1.2);
      }

      .ant-menu-title-content {
        opacity: 0;
        transform: translateX(-10px);
        width: 0;
        margin-left: 0;
      }
    }
  }
`;

const MainMenu: React.FC<MainMenuProps> = ({ theme = 'light', collapsed }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const mainMenuItems = useMainMenuItems();

  const menuItems = useMemo(() => {
    return mainMenuItems.map((item: any) => ({
      key: item.key,
      icon: item.icon,
      label: item.label,
      onClick: () => navigate(item.key),
    }));
  }, [mainMenuItems, navigate]);

  return (
    <StyledMenuContainer>
      <StyledMenu
        theme={theme}
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        inlineCollapsed={collapsed}
      />
    </StyledMenuContainer>
  );
};

export default MainMenu;