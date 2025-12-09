const express = require("express");
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController.js");

const router = express.Router();

// GET all products
router.get("/", getProducts);

// GET a single product by ID
router.get("/:id", getProductById);

// POST a new product
router.post("/", createProduct);

// PUT update a product
router.put("/:id", updateProduct);

// DELETE a product
router.delete("/:id", deleteProduct);

module.exports = {router};
