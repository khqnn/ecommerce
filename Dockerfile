# system npm version: 9.5.1
# system node version: v18.16.0
FROM node:alpine AS development

ENV NODE_ENV development

WORKDIR /react-app

COPY . .

RUN yarn install

CMD ["yarn", "start"]