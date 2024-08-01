FROM node:18-alpine AS base

FROM base AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

RUN pnpm -g add turbo

COPY . .

RUN turbo prune --scope=my-pets-api --docker

FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml


FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

RUN pnpm install
COPY --from=builder /app/out/full/ .
COPY global.d.ts global.d.ts
COPY tsReset.d.ts tsReset.d.ts
COPY turbo.json turbo.json
RUN pnpm turbo run build --filter=my-pets-api...
FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 expressjs
RUN adduser --system --uid 1001 expressjs
USER expressjs
COPY --from=installer /app .

CMD node apps/my-pets-api/dist/index.js
