const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const app = express();
const port = 3000;
app.use(express.json());

mongoose.connect("mongodb://localhost:27027", {});

app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
