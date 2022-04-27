const express = require('express');
const path = require('path');
const cors = require('cors')
const bcrypt = require('bcryptjs');
const {MongoClient, ServerApiVersion} = require('mongodb');
const app = express(),
      bodyParser = require("body-parser");
      port = 8000;

let apartments, users;
let auth = false;
async function main(){
  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.urlencoded({extended: false}))

  const uri = "mongodb+srv://student:smucs5346@cs5346-apartmentwebsite.htmdn.mongodb.net/cs5346-apartmentwebsite?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  try {
    client.connect(err => {
      apartments = client.db("apartments").collection("apartments");
      users = client.db("apartments").collection("users");
    });
  } catch (e) {
    console.log(e)
  } finally {
    client.close()
  }

  app.get('/search', (req,res) => {
    console.log("GOT HER")
    apartments.find({}).toArray((err, result) => {res.status(200).send(result)})
  });

  app.get('/apartment/:id', (req,res) => {
    console.log("GOT HER2")
    // let apartment
    console.log(req.params.id)
    apartments.findOne({id: parseInt(req.params.id)}, (err, result) => {res.status(200).json(result)})
  });

  app.post('/apartment/:id', (req, res) => {
      console.log(req.body)
      apartments.updateOne({id: parseInt(req.params.id)}, {$set: {name: req.body.name, address: req.body.address, units: req.body.units, price: req.body.price, sqft: req.body.sqft, url: req.body.url, listings: req.body.listings, desc: req.body.desc}})
  })

  app.get('/dev', (req,res) => {
    console.log(auth)
    if(auth) {
      auth = false;
      res.end(JSON.stringify(true));
    }
    else {
      res.end(JSON.stringify(false));
    }
    // apartments.find({}).toArray((err, result) => {res.status(200).send(result)})
  });

  //login check
  app.post('/login', (req, res) => {
    users.findOne({email: req.body.email}, (err, result) => {
      if(result) {
        bcrypt.compare(req.body.password, result.password, function(err, isMatch) {
          if(err) {
            throw err
          } else if (!isMatch){
              console.log("Password doesn't match!") 
              res.end(JSON.stringify(false)); //if password doesn't match return empty array
          } else {
              console.log("Password matches!")
              auth = true;
              res.end(JSON.stringify(true)); //if password matches return userID
          }
        })
      }
      else {
        console.log("Password doesn't match!")
        res.end(JSON.stringify(false));
      }
    })
  });
  
  app.listen(port, () => {
      console.log(`Server listening on the port::${port}`);
  });

}

main().catch(console.error);