FROM node:10.16.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm rebuild


COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "dev"]

