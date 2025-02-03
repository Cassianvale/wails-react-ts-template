import React from 'react';
import { Avatar, Dropdown, theme } from 'antd';
import { useUserMenuItems } from './config/menuConfig';
import { useTranslation } from 'react-i18next';
import testAvatar from '../../../../assets/images/user_avatar.png';
import type { MenuProps } from 'antd';

interface UserProfileProps {
  collapsed: boolean;
  theme: 'dark' | 'light';
}

const UserProfile: React.FC<UserProfileProps> = React.memo(({ collapsed, theme: themeMode }) => {
  const { token } = theme.useToken();
  const { t } = useTranslation();
  const userMenuItems = useUserMenuItems();

  const handleUserMenuClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case 'logout':
        console.log('User logged out');
        break;
      case 'profile':
        console.log('View profile');
        break;
      case 'edit':
        console.log('Edit profile');
        break;
      case 'switch':
        console.log('Switch account');
        break;
    }
  };

  return (
    <div 
      className="user-profile"
      style={{
        background: token.colorBgContainer,
      }}
    >
      <Dropdown
        menu={{
          items: userMenuItems,
          onClick: handleUserMenuClick,
        }}
        trigger={['click']}
        placement="top"
        arrow={{ pointAtCenter: true }}
      >
        <div className="user-profile-content" style={{ justifyContent: collapsed ? 'center' : 'flex-start' }}>
          <Avatar
            className="user-avatar"
            src={testAvatar}
            style={{
              width: collapsed ? '32px' : '40px',
              height: collapsed ? '32px' : '40px',
              flexShrink: 0,
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
          <div 
            className="user-info"
            style={{
              opacity: collapsed ? 0 : 1,
              maxWidth: collapsed ? 0 : '200px',
              marginLeft: collapsed ? 0 : '12px',
              visibility: collapsed ? 'hidden' : 'visible',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div className="user-name" style={{ color: token.colorText }}>
              Admin User
              <span
                className="user-status"
                style={{ backgroundColor: token.colorSuccess }}
              />
            </div>
            <div className="user-status-text" style={{ color: token.colorTextSecondary }}>
              {t('menu.online')}
            </div>
          </div>
        </div>
      </Dropdown>
    </div>
  );
});

UserProfile.displayName = 'UserProfile';

export default UserProfile;