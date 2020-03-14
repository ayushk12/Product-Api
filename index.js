// importing all the required files and libraries
const express = require("express");

const port = process.env.PORT || 8000;

const db = require("./config/mongoose");
const Schemas = require("./models/Schemas");
const app = express();


// body parser for req.body.params
app.use(express.urlencoded());
app.use(express.json())

// use express router
app.use("/", require("./routes"));


//connecting on server
app.listen(port, function(err) {
  if (err) {
    console.log("error running in the server", err);
  }
  console.log("yup my express server is running on port ", port);
});
