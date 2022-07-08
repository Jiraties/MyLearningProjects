const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("In /users");
  res.send("<h1>The users page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In /");
  res.send("<h1>The home page</h1>");
});

app.listen(3000);
