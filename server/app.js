require("dotenv").config();
const express = require("express");
require("./db/connection.js");
const DefaultData = require("./Defaultdata.js");
const app = express();
const cookieparser = require("cookie-parser")

// Enable CORS middleware before defining routes
const cors = require("cors");
app.use(cors());
app.use(cookieparser(""));

app.use(express.json());

const router = require("./routes/Router.js");
app.use(router);

const port = 8005;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
DefaultData();
