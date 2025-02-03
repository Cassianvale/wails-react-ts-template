import React from 'react';
import { Avatar, Dropdown, theme } from 'antd';
import { userMenuItems } from './config/menuConfig';
import testAvatar from '../../../../assets/images/user_avatar.png';
import type { MenuProps } from 'antd';

interface UserProfileProps {
  collapsed: boolean;
  theme: 'dark' | 'light';
}

const UserProfile: React.FC<UserProfileProps> = React.memo(({ collapsed, theme: themeMode }) => {
  const { token } = theme.useToken();

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
        borderTop: `1px solid ${token.colorBorder}`,
        background: token.colorBgContainer,
      }}
    >
      <Dropdown
        menu={{
          items: userMenuItems,
          onClick: handleUserMenuClick,
        }}
        trigger={['click']}
        placement="topRight"
        arrow={{ pointAtCenter: true }}
      >
        <div>
          <Avatar
            size={collapsed ? 32 : 40}
            src={testAvatar}
            style={{
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          />
        </div>
      </Dropdown>
      {!collapsed && (
        <div className="user-info">
          <div 
            className="user-name"
            style={{ color: token.colorText }}
          >
            CassianVale
            <div
              className="user-status"
              style={{
                backgroundColor: token.colorSuccess,
                boxShadow: `0 0 0 2px ${token.colorBgContainer}`,
              }}
            />
          </div>
          <div 
            className="user-status-text"
            style={{ color: token.colorTextSecondary }}
          >
            Online
          </div>
        </div>
      )}
    </div>
  );
});

UserProfile.displayName = 'UserProfile';

export default UserProfile; 