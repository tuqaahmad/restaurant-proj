FROM node:latest as builder
WORKDIR /app
COPY package.json ./app
RUN npm install
COPY ./ ./
RUN npm install
RUN npm start
FROM nginx 
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html