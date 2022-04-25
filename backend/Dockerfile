FROM node:16 as backend-server
WORKDIR /app
# COPY --from=react-app /usr/src/app/frontend ./frontend
#COPY package.json ./
#COPY package-lock.json ./
#COPY server.js ./
COPY / ./
RUN npm install --global json
RUN npm install --global child_process
RUN node package.js

EXPOSE 8000

CMD ["npm", "start"]
