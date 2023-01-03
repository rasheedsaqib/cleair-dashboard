FROM node:latest

LABEL maintainer="Shehryar Amin"

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install

EXPOSE 3080

CMD ["npm", "run", "dev"]
