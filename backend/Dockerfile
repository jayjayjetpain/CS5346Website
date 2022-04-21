FROM node:16 as backend-server
WORKDIR /app
# COPY --from=react-app /usr/src/app/frontend ./frontend
COPY package*.json ./
COPY server.js ./

EXPOSE 8000

CMD ["npm", "run"]