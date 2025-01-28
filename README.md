# Sui 钱包余额查询项目

这是一个基于 [Next.js](https://nextjs.org) 开发的 Sui 钱包余额查询显示应用。该项目使用 `create-next-app` 搭建，集成了 Sui SDK，可以实时查询 Sui 区块链上的钱包余额信息。

## 主要功能

- Sui 钱包地址余额查询
- 实时更新余额信息
- 支持多种代币余额显示
- 友好的用户界面

## 开始使用

首先，运行开发服务器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 即可查看应用。

你可以通过修改 `app/page.tsx` 来编辑页面内容。页面会随着你的编辑自动更新。

## 技术栈

- Next.js - React 框架
- Sui SDK - 与 Sui 区块链交互
- TypeScript - 类型安全
- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) - 字体优化

## 部署

推荐使用 [Vercel 平台](https://vercel.com/new) 进行部署，这是 Next.js 官方推荐的部署方案。

## 了解更多

- [Sui 开发文档](https://docs.sui.io/)
- [Next.js 文档](https://nextjs.org/docs)
- [项目 GitHub 仓库](#) - 欢迎贡献代码和提出建议！
