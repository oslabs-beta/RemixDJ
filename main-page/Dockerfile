FROM node:16-bullseye-slim as base

ENV NODE_ENV production

FROM base as deps

WORKDIR /app

ADD package.json package-lock.json .npmrc ./
RUN npm install --production=false

FROM base as production-deps

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
ADD package.json package-lock.json .npmrc ./
RUN npm prune --production

#Building the app
FROM base as build
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
ADD . .
RUN npm run build

FROM base
ENV PORT="3000"
ENV NODE_ENV=production

WORKDIR /app
