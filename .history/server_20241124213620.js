const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

const server  = app.listen(PORT, ()=>{
    console.log(`Widestage is running on Port`)
})