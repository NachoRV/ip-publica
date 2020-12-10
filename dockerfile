FROM node

COPY ./ /usr/ip-workdir/
WORKDIR /usr/ip-workdir
RUN npm install
CMD [ "node", "index.js" ]

