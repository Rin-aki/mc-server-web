# 1. 依赖安装阶段
FROM node:20-bookworm-slim AS deps
RUN apt-get update \
 && apt-get install -y --no-install-recommends python3 make g++ ca-certificates \
 && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm config set registry https://registry.npmmirror.com/ \
 && npm ci

# 2. 编译阶段
FROM node:20-bookworm-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm config set registry https://registry.npmmirror.com/ \
 && npm run build

# 3. 运行阶段
FROM node:20-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN groupadd --system --gid 1001 nodejs \
 && useradd --system --uid 1001 --gid 1001 nextjs \
 && mkdir -p /app/data \
 && chown -R nextjs:nodejs /app/data

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

VOLUME ["/app/data"]

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
