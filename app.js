// import required npm packages
const express= require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const DB_CONNECT = require("./Util/db_connect")
dotenv.config({path:"./Config/index.env"})
// set up app;

const app = express();
// DB Connecttion
DB_CONNECT()
// set up middlewares
app.use(express.json());
app.use(cors());
// Add headers to prevent cors
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-type,X-auth-token');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
  
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    // Pass to next layer of middleware
    next();
  });
  // end of header to prent cors

  module.exports = app
  