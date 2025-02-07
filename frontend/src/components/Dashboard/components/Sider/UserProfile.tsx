import React, { useMemo, useCallback } from 'react';
import { Dropdown, type MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import {
  StyledUserProfile,
  UserAvatar,
  UserInfo,
  UserName,
  UserStatus,
  StatusBadge,
} from './styles';
import { useUserMenuItems, handleUserMenuClick, UserMenuKey } from './config/menuConfig';

interface UserProfileProps {
  collapsed: boolean;
  theme?: 'light' | 'dark';
  userName?: string;
  userStatus?: 'online' | 'offline' | 'busy';
  avatarUrl?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  collapsed,
  userName = 'Cassian Vale',
  userStatus = 'online',
  avatarUrl
}) => {
  const { t } = useTranslation();
  const userMenuItems = useUserMenuItems();

  // 用户状态文本映射
  const statusText = useMemo(() => {
    const statusMap = {
      online: t('status.online'),
      offline: t('status.offline'),
      busy: t('status.busy')
    };
    return statusMap[userStatus] || statusMap.online;
  }, [userStatus, t]);

  // 菜单点击处理
  const onMenuClick: MenuProps['onClick'] = useCallback(({ key }) => {
    handleUserMenuClick(key as UserMenuKey);
  }, []);

  return (
      <Dropdown
        menu={{
          items: userMenuItems,
          onClick: onMenuClick
        }}
        trigger={['click']}
        placement={collapsed ? ('rightTop' as any) : 'bottomLeft'}
        getPopupContainer={trigger => {
          const siderElement = trigger.closest('.ant-layout-sider') as HTMLElement || document.body;
          return siderElement;
        }}
        dropdownRender={menu => (
          <div style={{ 
            minWidth: 140, 
            maxWidth: 160
          }}>
            {menu}
          </div>
        )}
      >
      <StyledUserProfile $collapsed={collapsed}>
        <UserAvatar
          size={32}
          icon={!avatarUrl && <UserOutlined />}
          src={avatarUrl}
        />
        <UserInfo $collapsed={collapsed}>
          <UserName>
            {userName}
            <StatusBadge $status={userStatus} />
          </UserName>
          <UserStatus>
            {statusText}
          </UserStatus>
        </UserInfo>
      </StyledUserProfile>
    </Dropdown>
  );
};

export default React.memo(UserProfile);