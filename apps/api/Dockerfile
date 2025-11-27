FROM node:lts-alpine AS builder

WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@10.20.0 --activate

# Copy entire monorepo to ensure workspace dependencies are resolved
COPY . .

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build the API
RUN pnpm --filter @my/api build

# Prune dev dependencies for production
RUN pnpm prune --prod

FROM node:lts-alpine AS runner

WORKDIR /app

# Copy built artifacts and production dependencies
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/api/package.json ./package.json

EXPOSE 3000

CMD ["node", "dist/main"]
