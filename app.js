//run with npm start
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { sequelize } = require("./src/models");
const config = require("./src/config/config");

const app = express();

app.use(cors());
// parse requests of content-type - application/json v
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded v
app.use(
  express.urlencoded({
    extended: true,
  })
);

require("./src/routes")(app);

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(config.port);
    console.log("Server started");
  })
  .catch((err) => console.log("in app.js: " + err));
