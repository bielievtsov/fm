FROM node:13.12.0-alpine

WORKDIR /fm

ENV PATH /fm/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install --silent
RUN npm i

COPY . .

CMD ["npm", "start"]
