import express from "express";
import { getAllProducts, createProduct, deleteProduct, updateProduct } from "../controllers/product.js";
const router = express.Router();

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.get("/", getAllProducts);

// PUT request is used to update all fields of a resource
// PATCH request is used to update some fields of a resource

router.put("/:id", updateProduct);

export default router;