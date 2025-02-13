FROM node:22

RUN npm install typescript -g

WORKDIR /iterable-string

# Teclado português com horário brasileiro
ENV LANG=C.UTF-8
ENV LANGUAGE=C.UTF-8
ENV LC_ALL=C.UTF-8
ENV TZ=America/Sao_Paulo
ENV DEBUG_COLORS=true
ENV FORCE_COLOR=true

EXPOSE 9229
EXPOSE 4200

# The run the start script
CMD [ "/bin/bash" ]
