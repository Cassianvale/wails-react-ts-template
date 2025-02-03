import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

type ThemeMode = 'system' | 'light' | 'dark';

export const useThemeMenuItems = (currentTheme: ThemeMode): MenuItem[] => {
  const { t } = useTranslation();

  return [
    {
      key: 'system',
      label: t('header.theme.system'),
      icon: <BulbOutlined />,
    },
    {
      key: 'light',
      label: t('header.theme.light'),
      icon: <BulbFilled style={{ color: '#faad14' }} />,
    },
    {
      key: 'dark',
      label: t('header.theme.dark'),
      icon: <BulbFilled style={{ color: '#177ddc' }} />,
    },
  ];
};

export const getThemeIcon = (themeMode: ThemeMode) => {
  switch (themeMode) {
    case 'light':
      return <BulbFilled style={{ color: '#faad14' }} />;
    case 'dark':
      return <BulbFilled style={{ color: '#177ddc' }} />;
    default:
      return <BulbOutlined />;
  }
};
