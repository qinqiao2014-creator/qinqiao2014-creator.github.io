# qinqiao2014-creator.github.io

OpenGuitarChordProject 个人主页 - 独立AI研究者阿早的项目展示网站。

## 在线访问

https://qinqiao2014-creator.github.io

## 项目简介

这是一个极简、学术、开源风格的个人主页，核心是展示 OpenGuitarChordProject（开源吉他和弦识别项目）。

**设计原则：**
- 项目 > 个人
- 诚实 > 包装
- 清晰 > 炫技

## 技术栈

- React 18 + TypeScript
- Vite（构建工具）
- Tailwind CSS（样式）
- shadcn/ui（UI组件）
- Lucide React（图标）

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
npm run build
```

构建输出在 `dist/` 目录。

## 部署到 GitHub Pages

1. 创建 GitHub 仓库 `qinqiao2014-creator.github.io`
2. 将代码推送到仓库
3. 在仓库设置中启用 GitHub Pages
4. 选择部署分支（通常是 `main` 或 `gh-pages`）

### 使用 GitHub Actions 自动部署

在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 项目结构

```
.
├── src/
│   ├── sections/          # 页面区块组件
│   │   ├── Hero.tsx       # 首屏
│   │   ├── ProjectOverview.tsx  # 项目介绍
│   │   ├── AboutMe.tsx    # 关于我
│   │   ├── Timeline.tsx   # 时间线
│   │   ├── Contact.tsx    # 联系方式
│   │   └── Footer.tsx     # 页脚
│   ├── App.tsx            # 主应用组件
│   ├── App.css            # 应用样式
│   ├── index.css          # 全局样式
│   └── main.tsx           # 入口文件
├── index.html             # HTML模板
├── tailwind.config.js     # Tailwind配置
├── vite.config.ts         # Vite配置
└── package.json           # 项目依赖
```

## 自定义修改

### 修改个人信息

编辑 `src/sections/` 目录下的对应组件：

- `Hero.tsx` - 修改标题、副标题
- `ProjectOverview.tsx` - 修改项目介绍
- `AboutMe.tsx` - 修改个人背景
- `Timeline.tsx` - 修改时间线内容
- `Contact.tsx` - 修改联系方式

### 修改样式

编辑 `src/index.css` 或 `tailwind.config.js` 修改颜色、字体等样式变量。

## 设计规范

### 配色

- 背景主色：`#0a0a0a`（纯黑）
- 背景次色：`#1a1a1a`（深灰）
- 文字主色：`#f0f0f0`（白色）
- 文字次色：`#999999`（中灰）
- 文字弱化：`#666666`（深灰）
- 边框：`#333333`

### 字体

- 中文：Noto Sans SC
- 英文/数字：Inter

## 许可证

MIT License
