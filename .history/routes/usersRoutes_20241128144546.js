const express = require("express");

const { UsersCreate, UsersDelete } = require("../controllers/usersController");

const router = express.Router();

router.route("/").post.delete(UsersDelete);

module.exports = router