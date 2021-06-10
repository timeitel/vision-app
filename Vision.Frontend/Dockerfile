FROM node:10

WORKDIR /usr/src/app/Vision.Frontend

COPY package*.json ./

RUN npm install

ADD . /usr/src/app/Vision.Frontend

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]