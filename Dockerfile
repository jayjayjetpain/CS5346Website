FROM node:16 as react-app

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY frontend/ ./frontend/
# COPY frontend/package.json ./frontend/package.json
# COPY frontend/package-lock.json ./frontend/package-lock.json

RUN cd frontend && npm install --silent && npm rebuild node-sass --force && npm run build

# add app

# EXPOSE 3000

FROM node:16 as backend-server
WORKDIR /root/
COPY --from=react-app /usr/src/app/frontend/build ./frontend/build
COPY backend/package.json ./backend/package.json
COPY backend/package-lock.json ./backend/package-lock.json
RUN cd backend && npm install
COPY backend/server.js ./backend/

EXPOSE 3080

# start app
CMD ["node", "./backend/server.js"]
# CMD ["npm", "start"]