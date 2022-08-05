const express = require("express");

const app = express();
require("./models");
const userCtrl = require("./controllers/userController");
const port = 8080;
app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/add", userCtrl.addUser);

app.listen(port, () =>
  console.log(`App is listening at http://localhost${port}`)
);
