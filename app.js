const express = require("express");
const bodyParser = require("body-parser");
const Router = require("./router/router");

const app = express();

// Middleware for parsing URL-encoded and JSON data
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());

// Set up routing
app.use("/", Router);

// Serve static files from the "public" directory
app.use(express.static(`${__dirname}/public`))

module.exports = app;
