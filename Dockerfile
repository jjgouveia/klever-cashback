FROM node:16.14-alpine

WORKDIR /app_klevercashback

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]