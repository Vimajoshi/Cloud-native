// Requiring all the npm packages we installed
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

// creating a app using express module
const app = express();

// body parser 
app.use(bodyParser.urlencoded({ extended: true }));

// setting up the server
app.listen(3000, function () {
  console.log("Server running at port 3000");
});
