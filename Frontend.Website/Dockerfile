FROM node:10

WORKDIR /app/frontend-website

COPY package*.json ./

RUN npm install

ADD . /app/frontend-website

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]