const express = require("express");
const Authorized = require("../controllers/authController");

const {
  signupValidator,
  loginValidator,
} = require("../utils/validators/authValidator");
const { signup, login, forgotPassword, verifyPassResetCode, resetPassword } = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(signupValidator, signup);

router.use(Authorized.protect)

router.route("/login").post(loginValidator, login);
router.route("/forgetPassword").post(forgotPassword);
router.route("/verifyResetCode").post(verifyPassResetCode);
router.route("/resetPassword").put(resetPassword);

module.exports = router;
