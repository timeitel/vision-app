FROM node:12-slim

WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm install

ADD . /usr/src/app/backend

RUN npm run build

EXPOSE 8080

CMD [ "npm", "start" ]