const express = require("express");

const dotenv = require("dotenv");

const morgan = require("morgan");

const mongoose = require("mongoose");

const usersRoutes = require('./routes/usersRoutes')
dotenv.config({ path: "config.env" });
const app = express();

app.use(morgan());

app.use("/api/admin/users", usersRoutes);
app.get("/", (req, res) => {
  res.send("Widestage");
});

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Widestage is running on Port ${PORT}`);
});
