//required modules
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");
const constants = require("./config/constants");
const dbconfig = require("./config/dbconfig");
const fs = require("fs");
//Enable CORS
constants.APP.use(cors({ credentials: true, origin: true }));
constants.APP.use(function (req, res, next) {
  var allowedOrigins = ["http://localhost:1300", "http://bizlypos.com:1300"];
  var origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "origin,Content-Type, Authorization,X-Requested-With,Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  return next();
});

//Bodyparsing (JSON and Multi-Form)
constants.APP.use(bodyparser.json({ limit: "1000mb" }));
constants.APP.use(bodyparser.urlencoded({ limit: "1000mb", extended: true }));

//mongodb connection
dbconfig.connectToDB;

const userRoutes = require("./_ecojobs_routes/_ecojobs_users_route");

constants.APP.use("/user", userRoutes);

//Start Server
constants.APP.listen(constants.PORT, () => {
  console.log("Server Started on port : " + constants.PORT);
});
