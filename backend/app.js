var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var cors = require('cors')

var admin = require("./routes/admin");
var shop = require("./routes/shop");
var user = require("./routes/user");
var feedback = require("./routes/feedback");
var notification = require("./routes/notification");
var product = require('./routes/product')
var order = require('./routes/order')

const apds = require("./database");
apds.sync({ alter: true });

var app = express();

app.use(cors({
  origin: '*'
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/admin", admin);
app.use("/shop", shop);
app.use("/user", user);
app.use("/feedback", feedback);
app.use("/notification", notification);
app.use('/product', product)
app.use('/order', order)

app.use("*", (req, res) => {
  try {
    res.sendStatus(404);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = app;
