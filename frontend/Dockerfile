FROM node:16 as react-app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY / ./
#RUN npm install --global json
#RUN npm install --global child_process
#RUN node package.js
RUN npm install --silent &&  npm rebuild node-sass --force --global

EXPOSE 3000

CMD ["npm", "start"]
