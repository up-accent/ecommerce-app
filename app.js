const express = require('express')
const cors = require("cors");
const mongoose = require("mongoose");

const app = express()
const port = 3000

const config=require("./config")

dbUrl=config.dbUrl;


mongoose.connect(dbUrl, (err) => {
    if (err) console.log(err);
    else console.log("success")
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})