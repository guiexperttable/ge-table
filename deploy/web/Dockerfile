#FROM nginx
FROM --platform=linux/amd64 nginxinc/nginx-unprivileged

#RUN rm /etc/nginx/conf.d/default.conf

COPY dist/apps/table-website /usr/share/nginx/html

COPY deploy/web/conf /etc/nginx

USER root

EXPOSE 80 80

CMD ["nginx", "-g", "daemon off;"]
