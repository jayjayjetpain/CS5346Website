const express = require('express');
const path = require('path');
// const mysql = require('mysql');
const {MongoClient} = require('mongodb');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

async function main(){
  app.use(bodyParser.json());

  const uri = "mongodb+srv://student:smucs5346@cs5346-apartmentwebsite.htmdn.mongodb.net/cs5346-apartmentwebsite?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  
  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      await  listDatabases(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }


  app.get('/', (req,res) => {
    console.log("GOT HER")
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  });
  
  app.listen(port, () => {
      console.log(`Server listening on the port::${port}`);
  });

}

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);
// place holder for the data
// const logger = log({ console: true, file: false, label: config.name });

// var connection = mysql.createConnection({

//   user: 'root',
//   password: 'smucs5346',
//   database: 'apartments',
//   socketPath: '/cloudsql/cs-5346-apartmentwebsite:us-central1:cs-5346-apartmentwebsite'
// });
// console.log(connection)
// const users = [];

// app.use(bodyParser.json());
// // app.use(express.static(path.join(__dirname, '../frontend/build')));


// connection.connect(function (err) {
//   if (err) {
//     logger.error("Cannot connect to DB!");
//     logger.error(err.stack);
//   }
//   else
//     logger.info("Connected to the DB!");
// });
// app.get('/api/users', (req, res) => {
//   console.log('api/users called!')
//   res.json(users);
// });

// app.post('/api/user', (req, res) => {
//   const user = req.body.user;
//   console.log('Adding user:::::', user);
//   users.push(user);
//   res.json("user addedd");
// });

// app.get('/', (req,res) => {
//   // res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
// });

// app.listen(port, () => {
//     console.log(`Server listening on the port::${port}`);
// });
