# 全栈开发模板 (Full Stack Template)

这是一个基于高性能现代技术栈构建的全栈单体仓库（Monorepo）模板。集成了 **NestJS** (后端), **Vue 3** (前端), 和 **Rust** (高性能服务)，并配置了完整的开发、构建和部署流程。

## ✨ 特性

- **Monorepo 架构**: 使用 [Turbo](https://turbo.build/) 和 [pnpm workspaces](https://pnpm.io/workspaces) 高效管理多包项目。
- **后端 (API)**: 基于 [NestJS](https://nestjs.com/)，集成 PostgreSQL 和 Redis，提供稳健的 API 服务。
- **前端 (Web)**: 基于 [Vue 3](https://vuejs.org/) 和 [Vite](https://vitejs.dev/)，打造极速响应的现代化用户界面。
- **高性能服务 (Service)**: 集成 [Rust](https://www.rust-lang.org/)，用于处理计算密集型任务。
- **容器化**: 提供完整的 Docker 和 Docker Compose 配置，一键启动开发环境。
- **CI/CD**: 集成 GitHub Actions，自动化测试、构建并推送 Docker 镜像到 GHCR。
- **代码质量**: 配置了 ESLint, Prettier, Husky 和 Lint-staged，确保代码风格统一且无错误。
- **规范化提交**: 集成 Commitizen，强制执行 Conventional Commits 规范。

## 🛠️ 技术栈

- **包管理器**: pnpm
- **构建系统**: Turbo
- **后端**: NestJS, TypeScript, Prisma (可选), PostgreSQL, Redis
- **前端**: Vue 3, TypeScript, Vite, Pinia, Vue Router
- **服务**: Rust, Cargo
- **DevOps**: Docker, GitHub Actions

## 🚀 快速开始

### 前置要求

请确保本地已安装以下工具：

- **Node.js**: LTS 版本 (推荐 v20+)
- **pnpm**: v10.20.0+ (`corepack enable`)
- **Docker** & **Docker Compose**: 用于运行数据库和缓存服务
- **Rust**: 最新稳定版 (仅在开发 Rust 服务时需要)

### 安装

1.  **克隆仓库**

    ```bash
    git clone <your-repo-url>
    cd full_template
    ```

2.  **安装依赖**

    ```bash
    pnpm install
    ```

3.  **启动基础设施 (数据库 & 缓存)**

    ```bash
    pnpm db:up
    ```

4.  **启动开发服务器**
    同时启动 API, Web 和 Rust 服务：
    ```bash
    pnpm dev
    ```
    或者一键启动基础设施和所有应用：
    ```bash
    pnpm dev:all
    ```

访问应用：

- **Web**: http://localhost:5173
- **API**: http://localhost:3000

## 📜 常用命令

| 命令           | 说明                                  |
| -------------- | ------------------------------------- |
| `pnpm dev`     | 启动所有应用的开发模式 (Turbo)        |
| `pnpm dev:all` | 启动 Docker 基础设施并运行所有应用    |
| `pnpm build`   | 构建所有应用                          |
| `pnpm check`   | 运行全量检查 (Lint, Type-check, Test) |
| `pnpm test`    | 运行所有测试                          |
| `pnpm lint`    | 运行代码风格检查                      |
| `pnpm format`  | 格式化代码                            |
| `pnpm commit`  | 使用 Commitizen 提交代码 (推荐)       |
| `pnpm db:up`   | 启动 PostgreSQL 和 Redis 容器         |
| `pnpm db:down` | 停止并移除基础设施容器                |

## 📂 项目结构

```
.
├── apps
│   ├── api          # NestJS 后端应用
│   ├── web          # Vue 3 前端应用
│   └── service      # Rust 高性能服务
├── packages         # 共享 TypeScript 库 (可选)
├── .github          # GitHub Actions 工作流
├── docker-compose.yml # 本地开发编排
├── turbo.json       # Turbo 构建配置
└── package.json     # 根项目配置
```

## 🐳 部署

本项目配置了自动化部署流程。当推送标签（Tag）时，GitHub Actions 会自动构建 Docker 镜像并推送到 GitHub Container Registry (GHCR)。

- **触发规则**: 推送标签 `@my/meta@*` (例如 `@my/meta@1.0.0`)
- **镜像产物**:
  - `ghcr.io/<owner>/full_template/api:<version>`
  - `ghcr.io/<owner>/full_template/web:<version>`
  - `ghcr.io/<owner>/full_template/service:<version>`

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！详情请查阅 [贡献指南](CONTRIBUTING.md)。
