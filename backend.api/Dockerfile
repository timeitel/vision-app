FROM node:12-slim

WORKDIR /app/backend-api

COPY package*.json ./

RUN npm install

ADD . /app/backend-api

RUN npm run build

ENV PORT=3080
EXPOSE 3080

CMD ["npm", "run", "start"]