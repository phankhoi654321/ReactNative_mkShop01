const express = require("express");
const router = express.Router();

//load input validation
const validateRegisterInput = require("../../validation/register");

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
        birthday: req.body.birthday,
        login: true
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

module.exports = router;
