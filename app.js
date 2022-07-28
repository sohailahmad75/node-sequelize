const express = require("express");

const app = express();
require("./models/index");
const port = 8080;
app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(port, () =>
  console.log(`App is listening at http://localhost${port}`)
);
