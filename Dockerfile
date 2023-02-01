FROM --platform=linux/amd64 node:18-alpine

ENV NODE_ENV development

RUN npm install -g pnpm

WORKDIR /app

COPY package*.json pnpm-lock.yaml* ./

RUN pnpm i

COPY . .

ENV NODE_ENV production

RUN pnpm run build

FROM --platform=linux/amd64 node:18-slim

WORKDIR /app

COPY --from=0 /app .

COPY . .

EXPOSE 3000

CMD ["node", "./build"]