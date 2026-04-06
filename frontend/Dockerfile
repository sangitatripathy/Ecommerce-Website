# Base image
FROM node:22-alpine

# set the working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json .

# install dependencies
RUN npm install

COPY . .

EXPOSE 5173

# start the application
CMD ["npm","run","dev"]