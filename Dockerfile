# Node image
FROM node:14.15 as builder

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# copy source code
COPY . /usr/src/app/

# install and cache app dependencies
RUN npm install

# build application
RUN npm run production

# Nginx
FROM nginx:1.19
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY --from=builder /usr/src/app/app-build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
