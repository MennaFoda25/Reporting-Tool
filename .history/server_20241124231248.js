const express = require("express");

const dotenv = require("dotenv");

const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.get('/', (req,res)=>{
    
})

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Widestage is running on Port ${PORT}`);
});
