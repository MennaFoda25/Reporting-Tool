const express = require("express");

const dotenv = require("dotenv");

const 
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Widestage is running on Port ${PORT}`);
});