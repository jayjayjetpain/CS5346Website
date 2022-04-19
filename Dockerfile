#frontend
FROM node:16 as react-app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY frontend/ ./frontend/
RUN cd frontend && npm install --silent && npm rebuild node-sass --force && npm run build

#backend
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
