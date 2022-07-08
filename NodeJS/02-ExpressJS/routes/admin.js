const express = require("express");
const path = require("path");

const productsController = require("../controller/products");

const Router = express.Router();

Router.get("/add-product", productsController.getAddProductPage);
Router.post("/product", productsController.postAddProduct);

module.exports = Router;
