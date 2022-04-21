FROM node:16 as react-app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY / ./
RUN npm install --global react-scripts
RUN npm install --silent && npm rebuild node-sass --force

EXPOSE 3000

CMD ["npm", "start"]
