FROM node:10

WORKDIR /app/frontend-app

COPY package*.json ./

RUN npm install

ADD . /app/frontend-app

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]