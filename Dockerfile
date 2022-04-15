# pull official base image
FROM node:16

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./


RUN npm install --silent
# RUN mkdir -p /app/node_modules/node-sass/vendor/linux-x64-93
# RUN curl -L https://github.com/sass/node-sass/releases/download/v7.0.1/linux-x64-93_binding.node -o /app/node_modules/node-sass/vendor/linux-x64-93/binding.node
RUN npm rebuild node-sass
# RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]