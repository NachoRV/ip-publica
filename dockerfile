FROM node

COPY ./ /usr/ip-workdir/
WORKDIR /usr/ip-workdir
RUN npm install
RUN npm run start


