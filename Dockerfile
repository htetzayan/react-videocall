FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install
RUN npm i --save socket.io

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build

# Running the app
EXPOSE 5000
CMD [ "npm", "start" ]

