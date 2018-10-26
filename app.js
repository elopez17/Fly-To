const express = require('express');
const app = express();
const dbURI = require("./config/keys").mongoURI;
const mongoose = require('mongoose');
const path = require("path");
const port = process.env.PORT || 5000;
const all = require('./routes/api/all');
const bodyParser = require('body-parser');
// const passport = require('passport');
// require('./config/passport')(passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


mongoose
  .connect(dbURI, {useNewUrlParser: true})
  .then(() => {})
  // .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => {});
  // .catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(passport.initialize());

app.use(express.static(__dirname + "/public/assets"));
// app.use('/public', express.static('public'));
app.use("/all", all);



app.listen(port, () => {});
// app.listen(port, () => console.log("ready"));
