const Product = require("../models/product.model");

//Simple version, without validation
exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};
