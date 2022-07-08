const express = require("express");
const path = require("path");

const productsController = require("../controller/products");
const Router = express.Router();

Router.get("/", productsController.getProducts);

module.exports = Router;
