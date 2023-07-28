FROM node:18 AS BUILD

MAINTAINER Antoine PRONNIER, <antoine.pronnier@gmail.com>

WORKDIR /container/build

COPY . .

RUN npm ci
RUN npm run build:ssr

FROM node:18 AS RUN

MAINTAINER Antoine PRONNIER, <antoine.pronnier@gmail.com>

EXPOSE 9777

WORKDIR /home/container

COPY . .
RUN npm ci

ENTRYPOINT ["npm", "run", "start"]
