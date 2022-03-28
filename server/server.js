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

app.listen(3001, () =>{
  console.log("running on port 3001")
})


module.exports={ 
  displayImage:function(callback){
   
   var sql='SELECT * FROM products';
   db.query(sql,function (err, data, fields) {
   if(err) throw err
   return callback(data);
  })
  }

}