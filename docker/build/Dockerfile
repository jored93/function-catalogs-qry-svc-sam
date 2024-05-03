ARG IMG
FROM ${IMG}

# instalando paquetes
RUN apk add npm=9.6.6-r0

# instalando dependencias
RUN npm install -g yarn@1.22.19

ENTRYPOINT [ "yarn" ]
