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
  background-color: var(--bg-color) !important;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    height: 100%;
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
        }
      }
    }
  }
`;