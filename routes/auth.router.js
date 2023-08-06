//You can use this template to create the user in any other project
const express = require('express');

const router = express.Router();

const signupHandler = require("../controllers/signupController")
const loginHandler = require("../controllers/loginController")
//first the user hast ot register then login
router.route("/register")//localhost:3500/api/auth/register//necessary because we have to save the user data in the database
    .post(signupHandler);

router.route("/login")//localhost:3500/api/auth/login
    .post(loginHandler);

module.exports = router;