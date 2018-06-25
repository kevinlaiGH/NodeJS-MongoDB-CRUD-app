const express = require("express");
const router = express.Router();

//Require the controllers WHICH WE DID NOT CREATE YET!
const product_controller = require("../controllers/product.controller");

// this is just a test url to make sure all of our files are communicate correctly
router.get("./test", product_controller.test);

module.exports = router;
