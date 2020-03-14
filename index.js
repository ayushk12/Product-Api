const express = require("express");

const port = process.env.PORT || 8000;

const db = require("./config/mongoose");
const Schemas = require("./models/Schemas");
const app = express();

app.use(express.urlencoded());
app.use(express.json())

app.use("/", require("./routes"));

app.listen(port, function(err) {
  if (err) {
    console.log("error running in the server", err);
  }
  console.log("yup my express server is running on port ", port);
});
