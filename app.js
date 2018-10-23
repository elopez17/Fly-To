const express = require('express');
const app = express();
const dbURI = require("./config/keys").mongoURI;
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;
const all = require('./routes/api/all');
const bodyParser = require('body-parser');
// const passport = require('passport');
// require('./config/passport')(passport);


mongoose
  .connect(dbURI, {useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(passport.initialize());

app.use("/all", all);



app.listen(port, () => console.log("ready"));
