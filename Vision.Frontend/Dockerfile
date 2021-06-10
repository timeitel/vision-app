FROM node:10

WORKDIR /usr/src/app/frontend

COPY package*.json ./

RUN npm install

ADD . /usr/src/app/frontend

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]