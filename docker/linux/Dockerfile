FROM mysql:latest
COPY canal-node-init.sql  /docker-entrypoint-initdb.d/

RUN echo log-bin=mysql-bin >> /etc/my.cnf
RUN echo binlog-format=ROW >> /etc/my.cnf
RUN echo server_id=1 >> /etc/my.cnf

