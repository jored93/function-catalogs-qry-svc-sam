FROM alpine:3.18
LABEL org.opencontainers.image.authors="Krafox - test"

# instalando paquetes
RUN apk update && apk upgrade && apk add --no-cache \
  nodejs=18.16.0-r1 \
  tzdata=2023c-r1

# configurando zona horaria
RUN cp /usr/share/zoneinfo/America/Guayaquil /etc/localtime && \
  echo "America/Guayaquil" > /etc/timezone
ENV TZ=America/Guayaquil

# configurando entorno
WORKDIR /app