# build environment
FROM node:10.11.0 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm install --silent
RUN npm install react-scripts@1.1.5 -g --silent
COPY . /usr/src/app
RUN npm run build

# production environment
FROM nginx:1.15.4-alpine
RUN apk add --no-cache bash
RUN rm -rf /etc/nginx/conf.d
COPY nginx-conf /etc/nginx
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["/bin/bash", "-c", "envsubst '$${PROXY_HOST}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]