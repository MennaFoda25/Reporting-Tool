const express = require("express");
const Authorized = require("../controllers/authController");
const {
  createUserValidator,
  updateUserValidator,
  getUserValidator,
  deleteUserValidator,
  changePasswordValidator,
 // updateLoggedUserPasswordValidator,
  updateLoggedUserDataValidator
} = require("../utils/validators/userValidator");
const {
  changePassword,
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getLoggedUserData,
  updateLoggedUserPassword,
  updateLoggedUserData,
  deleteLoggedUserData
} = require("../controllers/usersController");

const router = express.Router();


router.use(Authorized.protect)

router.get("/getMe", getLoggedUserData, getUser);
router.put( "/changeMyPassword",updateLoggedUserPassword);

router.put("/updateMyData",updateLoggedUserDataValidator, updateLoggedUserData);
router.delete("/deleteMe", deleteLoggedUserData);


//admin

router.use( Authorized.allowedTo("admin"));

router.put("/changePassword/:id", changePasswordValidator, changePassword);

router.route("/").post(createUserValidator, createUser).get(getUsers);

router
  .route("/:id")
  .get(getUserValidator, getUser)
  .delete(deleteUserValidator, deleteUser)
  .put(updateUserValidator, updateUser);

module.exports = router;
