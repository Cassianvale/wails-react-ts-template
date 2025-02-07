import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, zh } from './locales';

// 声明后端函数类型
// declare global {
//   interface Window {
//     go: {
//       "app.App.GetSystemLanguage": () => Promise<string>;
//     };
//   }
// }

// 获取系统语言
const getSystemLanguage = () => {
  const systemLanguage = navigator.language.toLowerCase();
  const supportedLanguages = ['en', 'zh'];
  const defaultLanguage = 'en';
  
  // 检查是否以支持的语言开头
  const matchedLanguage = supportedLanguages.find(lang => 
    systemLanguage.startsWith(lang)
  );

  // 对于中文特殊处理
  if (systemLanguage.startsWith('zh')) {
    if (systemLanguage.includes('cn') || systemLanguage.includes('hans')) {
      return 'zh';
    }
  }
  
  return matchedLanguage || defaultLanguage;
};

// 初始化 i18n
const initI18n = async () => {
  try {
    // 获取系统语言
    const systemLanguage = getSystemLanguage();
    
    await i18n
      .use(initReactI18next)
      .init({
        resources: {
          en: {
            translation: en,
          },
          zh: {
            translation: zh,
          },
        },
        lng: systemLanguage, // 使用系统语言
        fallbackLng: 'en',
        debug: process.env.NODE_ENV === 'development',
        interpolation: {
          escapeValue: false,
        },
      });

    // 监听系统语言变化
    window.matchMedia('(prefers-language)').addEventListener('change', () => {
      const newSystemLanguage = getSystemLanguage();
      i18n.changeLanguage(newSystemLanguage);
    });
    
  } catch (error) {
    console.error('Failed to initialize i18n:', error);
    // 如果获取系统语言失败，使用英语作为后备
    await i18n
      .use(initReactI18next)
      .init({
        resources: {
          en: {
            translation: en,
          },
          zh: {
            translation: zh,
          },
        },
        lng: 'en',
        fallbackLng: 'en',
        debug: process.env.NODE_ENV === 'development',
        interpolation: {
          escapeValue: false,
        },
      });
  }
};

// 执行初始化
initI18n();

export { getSystemLanguage };
export default i18n;
