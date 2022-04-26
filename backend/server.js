const express = require('express');
const path = require('path');
const cors = require('cors')
// const mysql = require('mysql');
const {MongoClient, ServerApiVersion} = require('mongodb');
const app = express(),
      bodyParser = require("body-parser");
      port = 8000;

let collection;
async function main(){
  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.urlencoded({extended: false}))
  // app.use(express.static(path.join(__dirname, '../frontend/public')))

  const uri = "mongodb+srv://student:smucs5346@cs5346-apartmentwebsite.htmdn.mongodb.net/cs5346-apartmentwebsite?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  try {
    client.connect(err => {
      collection = client.db("apartments").collection("apartments");
      // collection.updateOne({id: 8}, {$set: {price: [1430, 2435]}});
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

  app.get('/search', (req,res) => {
    console.log("GOT HER")
    // let aptList = []
    // if(req.query.zip) {
    //   console.log(req.query.zip)
      collection.find({}).toArray((err, result) => {res.status(200).send(result)})
      // collection.find({address: {$regex : req.query.zip}}).toArray((err, result) => {console.log(result);})
    // }
    // else {
    //   console.log("not found")
    // }
    // console.log(aptList)
    // res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
  });

  app.get('/apartment/:id', (req,res) => {
    console.log("GOT HER2")
    // let apartment
    console.log(req.params.id)
    collection.findOne({id: parseInt(req.params.id)}, (err, result) => {res.status(200).json(result)})
    // collection.find({id: parseInt(req.params.id)}).toArray((err, result) => {apartment = result;})
    // console.log(apartment)
    // res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
  });

  app.post('/apartment/:id', (req, res) => {
      console.log(req.body)
      collection.updateOne({id: parseInt(req.params.id)}, {$set: {name: req.body.name, address: req.body.address, units: req.body.units, price: req.body.price, sqft: req.body.sqft, url: req.body.url, listings: req.body.listings, desc: req.body.desc}})
  })

  app.get('/dev/search', (req,res) => {
    console.log("GOT HER")
    // let aptList = []
    // if(req.query.zip) {
    //   console.log(req.query.zip)
      collection.find({}).toArray((err, result) => {res.status(200).send(result)})
      // collection.find({address: {$regex : req.query.zip}}).toArray((err, result) => {console.log(result);})
    // }
    // else {
    //   console.log("not found")
    // }
    // console.log(aptList)
    // res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
  });

  app.get('/dev/apartment/:id', (req,res) => {
    console.log("GOT HER2")
    // let apartment
    console.log(req.params.id)
    collection.findOne({id: parseInt(req.params.id)}, (err, result) => {res.status(200).json(result)})
    // collection.find({id: parseInt(req.params.id)}).toArray((err, result) => {apartment = result;})
    // console.log(apartment)
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
