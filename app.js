const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");
const characterDiary = require("./routes/api/character_diary");

const app = express();

const db = require('./config/keys').mongoURI;
 
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users); 
app.use("/api/character_diary", characterDiary);

