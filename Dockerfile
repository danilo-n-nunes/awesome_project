FROM node:20

COPY . .

RUN npm install

RUN npm run start