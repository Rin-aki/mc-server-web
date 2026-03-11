# XPLUS Minecraft Server Web

XPLUS Minecraft 生存服务器官网，基于 Next.js 16 App Router 构建。站点用于展示服务器介绍、实时状态、新手入服指南、服规，以及在线玩家与玩家详情页。

## 功能概览

- 首页展示服务器定位、核心卖点、实时状态和在线玩家列表
- `/start` 提供新玩家入服流程、启动器入口和推荐整合包下载
- `/rules` 展示服务器守则、处罚说明与补充建议
- `/player/[name]` 展示玩家当前在线状态、最近在线时间和累计游玩时长
- 使用 `better-sqlite3` 在本地 `data/players.sqlite` 中保存玩家最近在线记录
- 服务状态与在线玩家数据来自 `api.mcstatus.io`

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- better-sqlite3
- lucide-react

## 本地开发

先安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

默认访问地址：

```text
http://localhost:3000
```

常用命令：

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## 数据与运行说明

- 玩家记录数据库会自动创建在 `data/players.sqlite`
- 项目当前没有必填环境变量
- 服务器地址目前写死为 `mc.rinakii.com`
- 玩家头像与皮肤预览使用 `minotar.net`

## Docker 部署

构建并启动：

```bash
docker compose up --build -d
```

停止容器：

```bash
docker compose down
```

说明：

- 容器对外暴露 `3000` 端口
- `./data` 会挂载到容器内 `/app/data`，用于持久化 SQLite 数据
- `Dockerfile` 使用多阶段构建，运行环境基于 Node.js 20

## 项目结构

```text
app/
  page.tsx              首页
  start/page.tsx        新手指南
  rules/page.tsx        服规页面
  player/[name]/page.tsx 玩家详情页
components/
  ServerStatus.tsx      服务状态卡片
  PlayerList.tsx        在线玩家列表
lib/
  mc-server.ts          Minecraft 服务状态请求
  player-db.ts          玩家本地记录与格式化逻辑
public/download/
  XPlus1.21.11.mrpack   推荐整合包
```

## 备注

这个仓库当前面向 XPLUS 服务器官网本身，不是 Minecraft 服务端程序。
