const express = require("express");
const path = require("path");
const cluster = require('cluster');
const http = require("http");
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const dotenv = require("dotenv");
const RedisStore = require('connect-redis')(session);
const session = require("express-session");
const passport = require("passport");
const multer = require('multer');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require('fs');
const os = require('os');



const usersRoutes = require("./routes/usersRoutes");
dotenv.config({ path: "config.env" });
const app = express();

app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(morgan());
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/admin/users", usersRoutes);
app.get("/", (req, res) => {
  res.send("Widestage");
});

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Widestage is running on Port ${PORT}`);
});
