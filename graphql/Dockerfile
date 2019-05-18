FROM node:10-alpine as base
ARG COMMIT_REF
ARG BUILD_DATE
ENV APP_COMMIT_REF=${COMMIT_REF} \
    APP_BUILD_DATE=${BUILD_DATE}
RUN env

FROM base as builder

# RUN apk add --update --no-cache \
#     python \
#     make \
#     g++

WORKDIR /src
COPY package*.json /src/

RUN npm ci

COPY . /src

RUN npm run lint
RUN npm run test
RUN npm run build

RUN npm prune --production

FROM base

ENV PORT=3000

EXPOSE $PORT


WORKDIR /usr/src/service

COPY --from=builder /src/node_modules node_modules
COPY --from=builder /src/dist dist

RUN env

USER node
CMD ["node", "./dist/index.js"]