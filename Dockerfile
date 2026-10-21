FROM node:24.21-alpine3.23

WORKDIR /app

COPY package*.json ./

# Node only waits 250ms per address when connecting; on slow networks every
# attempt is cut off and npm fails with ETIMEDOUT. Give each attempt 5s.
RUN NODE_OPTIONS=--network-family-autoselection-attempt-timeout=5000 npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
