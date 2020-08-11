FROM node:lts-alpine
WORKDIR /work
COPY package.json ./
RUN apk add bash
RUN npm install
CMD ["bash"]