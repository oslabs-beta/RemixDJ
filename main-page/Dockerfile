# Stage 1 build
FROM node:19
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json . 
RUN npm install
COPY . . 
RUN npm build

# Stage 2 build
