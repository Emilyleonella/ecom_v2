const express = require('express')
const { addListener } = require('nodemon')
const app = express()
const mysql = require('mysql')
const cors = require('cors');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Leonella123$',
  database: 'Ecom_V2'
})

db.connect(err => {
  if (err) {
      return err;
  }else{
    console.log('connected')
  }
})
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


app.listen(3001, () =>{
  console.log("running on port 3001")
})


