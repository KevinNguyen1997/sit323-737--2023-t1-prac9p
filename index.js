const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectMongoDatabase = require("./database-util");
const routes = require("./routes");

const app = express();
const port = 8000;
connectMongoDatabase();

app.use(bodyParser.json());
app.use("/api/blog", routes);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
