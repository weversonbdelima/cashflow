FROM node:22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Execute as migrations antes de iniciar o servidor
#RUN npx sequelize-cli db:migrate --config src/config/config.json

EXPOSE 3001

CMD ["node", "src/app.js"]
