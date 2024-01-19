const express = require("express");
const router = express.Router();

const { userSignup, userLogin, getUsers, getUser } = require("../controllers/users");

router.post("/signup",  userSignup);
router.post("/login",  userLogin);
router.post("/",  getUsers);
router.post("/:id",  getUser);

module.exports = router;