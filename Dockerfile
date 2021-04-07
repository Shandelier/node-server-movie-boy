FROM node:12-alpine
WORKDIR C:/Users/kluse/Documents/SPA/node-server-movie-boy
COPY package*.json ./
COPY . .

RUN npm i --production

EXPOSE 3000
CMD [ "node", "app.js" ]
