const express = require("express");
const router = express.Router();

//load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//load User model
const User = require("../../models/User");

//@router   Post api/users/register
//@desc     Register User router
//@access   Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email is already exist";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        birthday: req.body.birthday
        // login: true
      });
      newUser
        .save() // this come from mongoose
        .then(user => {
          res.json(user);
        }) // this is the promis
        .catch(err => console.log(err));
    }
  });
});

//@router   Post api/users/login
//@desc     Login User router
//@access   Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }) // email : email but can write only email with es6
    .then(user => {
      // callback with promis
      // Check for User
      if (!user) {
        errors.email = "user not found";
        return res.status(404).json(errors);
      }
      if (password == user.password) {
        return res.json(user);
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
});

module.exports = router;
