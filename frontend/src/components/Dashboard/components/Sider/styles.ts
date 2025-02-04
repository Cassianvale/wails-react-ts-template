import styled from 'styled-components';
import { Layout } from 'antd';

const { Sider } = Layout;

export const StyledSider = styled(Sider)`
  position: fixed !important;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  height: 100%;
  background-color: var(--color-bg-container) !important;
  transition: var(--transition-properties) !important;

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--color-bg-container);
    transition: var(--transition-properties);
  }

  &.ant-layout-sider-collapsed {
    .menu-container {
      .ant-menu-item {
        padding: 0 20px;
        margin: 4px 4px;
        opacity: 0.8;

        .ant-menu-title-content {
          opacity: 0;
          width: 0;
          margin-left: 0;
          transition: var(--transition-properties);
        }
      }
    }
  }


`;