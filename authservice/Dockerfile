FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm config set strict-ssl false
RUN npm install

COPY . .
# Expone el puerto en el que se ejecutará el servicio
EXPOSE 3000

CMD ["node", "index.js"]
