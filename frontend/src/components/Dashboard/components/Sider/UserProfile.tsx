import React from 'react';
import { Avatar, Dropdown, theme } from 'antd';
import { userMenuItems } from '../../config/menuConfig';
import testAvatar from '../../../../assets/images/test_avatar.png';
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
        console.log('用户登出');
        break;
      case 'profile':
        console.log('查看个人信息');
        break;
      case 'edit':
        console.log('编辑资料');
        break;
      case 'switch':
        console.log('切换账号');
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
            在线
          </div>
        </div>
      )}
    </div>
  );
});

UserProfile.displayName = 'UserProfile';

export default UserProfile; 