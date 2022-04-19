const express = require('express');
const path = require('path');
// const mysql = require('mysql');
const {MongoClient, ServerApiVersion} = require('mongodb');
const app = express(),
      bodyParser = require("body-parser");
      port = 8000;

async function main(){
  app.use(bodyParser.json());
  app.use(express.urlencoded({extended: false}))
  // app.use(express.static(path.join(__dirname, '../frontend/public')))

  const uri = "mongodb+srv://student:smucs5346@cs5346-apartmentwebsite.htmdn.mongodb.net/cs5346-apartmentwebsite?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  try {
    client.connect(err => {
      const collection = client.db("apartments").collection("apartments");
      // perform actions on the collection object
      // collection.find({}).toArray((err, result) => {
      //   console.log(result);
      // })
      // collection.find({id: 1}).toArray((err, result) => {
      //   console.log(result);
      // })
    });
  } catch (e) {
    console.log(e)
  } finally {
    client.close()
  }
  
  
  // try {
  //     // Connect to the MongoDB cluster
  //     await client.connect();
  //     const collection = client.db("apartments").collection("apartments")

  //     // Make the appropriate DB calls
  //     await  listDatabases(client, collection);

  // } catch (e) {
  //     console.error(e);
  // } finally {
  //     await client.close();
  // }


  app.get('/search', (req,res) => {
    console.log("GOT HER")
    // res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
  });

  app.get('/apartment', (req,res) => {
    console.log("GOT HER2")
    console.log(req.query)
    // res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
  });

  // app.get('*', (req,res) => {
  //   console.log("GOT HER")
  //   // res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
  // });
  
  app.listen(port, () => {
      console.log(`Server listening on the port::${port}`);
  });

}

async function listDatabases(client, collection){
  databasesList = await client.db().admin().listDatabases();
  console.log(client.db("cs5346-apartmentwebsite").collection("apartments"))
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));

  // const collection = client.db("apartments").collection("apartments")
  collection.find({}).toArray((err, result) => {
    console.log(result);
  })
  // docs.forEach(doc => console.log(doc));
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
