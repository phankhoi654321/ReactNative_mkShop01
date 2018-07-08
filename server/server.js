const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();
app.get("/", (req, res) => res.send("hello"));
// DB config
const db = require("./config/keys").mongoLocal;

//connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("mongoDB Connected"))
  .catch(err => console.log(err));

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false })); //the value can be string
app.use(bodyParser.json());

//Use Routes
app.use("/api/users", users);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
