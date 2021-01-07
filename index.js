const express = require("express");
const app = express();
const port = 8001;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
const routes = require("./routes/routes");
var cors = require("cors");

const connection = require("./db");

app.use(bodyParser.json());

app.use(cors());
routes(app);

connection
  .authenticate()
  .then(() => console.log("DB CONNECZTED"))
  .catch((err) => console.log("DB NOT CONNTECTEDs"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//POST  /signup name, email, password, mobile
