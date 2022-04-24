// import React from 'react';
const express = require('express')
const { addListener } = require('nodemon')
const app = express()
const mysql = require('mysql')
const cors = require('cors');
const { type } = require('os');
// const path = require('path');
// const port = process.env.PORT || 3000

// app.use(express.static(path.join(__dirname, 'build')));

// app.listen(port, () => console.log(`App is live on port ${port}!`));

//mysql://be1a0f798982d8:d8d52a08@us-cdbr-east-05.cleardb.net/heroku_8042a9edba81ab0?reconnect=true
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Leonella123$',
//   database: 'Ecom_V2'
// })
const db = mysql.createPool({
  host: 'us-cdbr-east-05.cleardb.net',
  user: 'be1a0f798982d8',
  password: 'd8d52a08',
  database: 'heroku_8042a9edba81ab0?'
})

// db.connect(err => {
//   if (err) {
//       return err;
//   }else{
//     console.log('connected')
//   }
// })


app.use(cors());
app.use(express.json())

app.get('/products',(req,res)=>{
  db.query(`SELECT * FROM products`, (err, result)=>{
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  });
});

app.get('/products/descriptions',(req,res)=>{
  db.query(`SELECT description FROM products `, (err, result)=>{
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  });
});

app.get('/products/type/:type',(req,res)=>{
   console.log(req.params.type) // req has an object called params 
  db.query(`SELECT * FROM products WHERE type = ${req.params.type}; `, (err, result)=>{
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  });
});


app.listen(3001, () =>{
  console.log("running on port 3001")
})


