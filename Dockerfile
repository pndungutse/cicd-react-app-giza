FROM node:24.21-alpine3.23

WORKDIR /app

COPY package*.json .

# RUN npm install
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]