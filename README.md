# wails-react-ts-template

中文 / [English](https://github.com/Cassianvale/wails-react-ts-template/blob/main/README_EN.md)

## Features

- **技术栈**:
  - _**Wails3**_ - Wails 框架的最新开发版本
  - _**React 18**_ - 使用最新的 React 功能和 Hooks
  - _**TypeScript**_ - 提供类型安全性和更优的开发体验
  - _**Vite**_ - 现代化前端构建工具，实现极速开发

- **国际化支持**:
  - 集成 i18next 实现多语言支持
  - 支持中英文切换
  - 可扩展的语言配置

- **用户界面与体验**:
  - 现代化的 UI 设计
  - 响应式布局
  - 深色/浅色主题切换

- **开发体验**:
  - 支持热重载
  - TypeScript 类型检查
  - ESLint + Prettier 代码规范
  - 开发模式下的实时预览

- **打包与部署**:
  - 一键构建 Windows 可执行文件
  - 自动化构建流程
  - 体积优化

- **安全特性**:
  - 安全的跨进程通信
  - 数据加密存储
  - 应用完整性校验

## Development
1. 安装 wails3
`go install -v github.com/wailsapp/wails/v3/cmd/wails3@latest`

2. 运行 wails3
`wails3 dev`

3. 构建应用程序
`wails3 build`

## Wails3 文档
https://v3alpha.wails.io/