FROM nginx:alpine
COPY . /usr/share/nginx/html
# nginx sirve index.html y /recursos/ automáticamente; puerto 80
EXPOSE 80
