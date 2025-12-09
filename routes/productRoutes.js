import express from"express"
import {
  getproducts,
  getproductById,
  createproduct,
  updateproduct,
  deleteproduct,
} from "../controllers/productController.js"

const router = express.Router();

// GET all products
router.get("/", getproducts);

// GET a single product by ID
router.get("/:id", getproductById);

// POST a new product
router.post("/", createproduct);

// PUT update a product
router.put("/:id", updateproduct);

// DELETE a product
router.delete("/:id", deleteproduct);

export default router;
