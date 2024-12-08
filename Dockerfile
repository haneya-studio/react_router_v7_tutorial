FROM httpd:latest

COPY httpd.conf /tmp/httpd.conf
RUN cat /tmp/httpd.conf >> /usr/local/apache2/conf/httpd.conf && rm /tmp/httpd.conf

EXPOSE 80
