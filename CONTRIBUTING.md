# 贡献指南

感谢你对本项目的关注！我们非常欢迎各种形式的贡献，无论是修复 Bug、改进文档，还是提出新功能建议。

为了让协作更加顺畅，请遵循以下指南。

## ✅ 前置准备

在开始贡献之前，请确保你的开发环境满足以下要求：

- **Node.js**: LTS 版本
- **pnpm**: v10.20.0+
- **Docker**: 用于运行本地数据库和缓存
- **Rust**: 如果你需要修改 `apps/service`

## 💻 开发流程

1.  **Fork 本仓库** 并克隆到本地。
2.  **安装依赖**:
    ```bash
    pnpm install
    ```
3.  **创建分支**:
    ```bash
    git checkout -b feature/my-new-feature
    ```
4.  **本地开发**:
    使用 `pnpm dev:all` 启动完整的开发环境。

## 提交规范

本项目使用 **Commitizen** 和 **Conventional Commits** 规范来管理提交信息。这有助于自动生成变更日志 (Changelog) 和版本管理。

**请勿直接使用 `git commit`**，而是运行：

```bash
pnpm commit
```

按照终端提示选择提交类型（如 `feat`, `fix`, `chore` 等）并填写描述。

## 🧪 代码质量

在提交 Pull Request 之前，请务必运行以下命令确保代码通过所有检查：

```bash
pnpm check
```

该命令会并行执行：

- ESLint 代码检查
- TypeScript 类型检查
- 单元测试 (Jest / Rust test)

此外，我们配置了 `husky` 和 `lint-staged`，在提交时会自动格式化暂存区的文件。

## 🔀 Pull Request 流程

1.  将你的分支推送到你的 Fork 仓库。
2.  在 GitHub 上发起 Pull Request 到 `main` 分支。
3.  请在 PR 描述中详细说明你的修改内容和目的。
4.  等待维护者审核。

感谢你的贡献！🚀
