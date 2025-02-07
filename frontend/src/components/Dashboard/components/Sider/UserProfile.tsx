import React from 'react';
import { Avatar, Dropdown, theme } from 'antd';
import { useUserMenuItems } from './config/menuConfig';
import { useTranslation } from 'react-i18next';
import testAvatar from '../../../../assets/images/user_avatar.png';
import type { MenuProps } from 'antd';
import styled from 'styled-components';

interface UserProfileProps {
  collapsed: boolean;
  theme: 'dark' | 'light';
}

const StyledUserProfile = styled.div<{ $bgColor: string }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  background-color: var(--color-bg-container);
  transition: all 0.3s var(--spring-transition);
  border-top: 1px solid var(--color-border);
  will-change: background-color;

  &:hover {
    background-color: var(--color-bg-container-hover);
  }

  &[data-theme='dark'] {
    border-top-color: rgba(255, 255, 255, 0.08);
    &:hover {
      background-color: var(--color-bg-container-hover);
    }
  }
`;

const StyledProfileContent = styled.div<{ $collapsed: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 0;
  transition: all 0.3s var(--spring-transition);
  justify-content: ${props => props.$collapsed ? 'center' : 'flex-start'};
  transform-origin: center;

  &:active {
    transform: scale(0.98);
  }
`;

const StyledAvatar = styled(Avatar)<{ $collapsed: boolean }>`
  width: ${props => props.$collapsed ? '32px' : '40px'};
  height: ${props => props.$collapsed ? '32px' : '40px'};
  flex-shrink: 0;
  transition: all 0.3s var(--spring-transition);
  border: 2px solid transparent;
  
  &:hover {
    border-color: var(--ant-primary-color);
    transform: scale(1.05);
  }
  
  [data-theme='dark'] & {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
`;

const StyledUserInfo = styled.div<{ $collapsed: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 0;
  margin-left: ${props => props.$collapsed ? 0 : '12px'};
  flex: 1;
  overflow: hidden;
  opacity: ${props => props.$collapsed ? 0 : 1};
  max-width: ${props => props.$collapsed ? 0 : '200px'};
  visibility: ${props => props.$collapsed ? 'hidden' : 'visible'};
  transform: translateX(${props => props.$collapsed ? '-8px' : 0});
  transition: all 0.3s var(--spring-transition);
  will-change: transform, opacity, max-width;
`;

const StyledUserName = styled.div<{ $textColor: string }>`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.$textColor};
  transition: color 0.3s var(--transition-timing);
`;

const StyledUserStatus = styled.span<{ $color: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
  background-color: ${props => props.$color};
  transition: all 0.3s var(--bounce-transition);
  
  ${StyledUserProfile}:hover & {
    transform: scale(1.2);
  }
`;

const StyledStatusText = styled.div<{ $textColor: string }>`
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.$textColor};
  transition: color 0.3s var(--transition-timing);
  opacity: 0.85;
  
  ${StyledUserProfile}:hover & {
    opacity: 1;
  }
`;

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
    <StyledUserProfile $bgColor={token.colorBgContainer}>
      <Dropdown
        menu={{
          items: userMenuItems,
          onClick: handleUserMenuClick,
        }}
        trigger={['click']}
        placement="top"
        arrow={{ pointAtCenter: true }}
      >
        <StyledProfileContent $collapsed={collapsed}>
          <StyledAvatar
            $collapsed={collapsed}
            src={testAvatar}
            className="user-avatar"
          />
          <StyledUserInfo $collapsed={collapsed}>
            <StyledUserName $textColor={token.colorText}>
              Admin User
              <StyledUserStatus $color={token.colorSuccess} />
            </StyledUserName>
            <StyledStatusText $textColor={token.colorTextSecondary}>
              {t('menu.online')}
            </StyledStatusText>
          </StyledUserInfo>
        </StyledProfileContent>
      </Dropdown>
    </StyledUserProfile>
  );
});

UserProfile.displayName = 'UserProfile';

export default UserProfile;