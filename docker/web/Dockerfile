FROM node:22-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 5173

CMD ["yarn", "dev"]
