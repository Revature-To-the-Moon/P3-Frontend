FROM node:14-alpine as build-step

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

# Stage 2

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/front-end /usr/share/nginx/html
COPY ./default.conf /etc/nginx/nginx.conf

EXPOSE 80
