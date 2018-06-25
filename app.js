const express = require("express");
const bodyParser = require("body-parser");
const product = require("./routes/product.route"); // Imports routes for the products
const app = express();

const mongoose = require("mongoose"); // set up mongoose connection
let dev_db_url =
  "mongodb://someuser:1234qwer@ds117431.mlab.com:17431/nodejs-crud-products-app";

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/products", product);

let port = 1234;
app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
