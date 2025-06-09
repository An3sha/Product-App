import Product from "../models/Product.js";
import mongoose from "mongoose";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}); //passing an empty object to find all the products
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error in getting products", error.message);
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body; // user will send this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" }); //400 is the status code for bad request
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    }); //201 is the status code for created
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message }); //500 is the status code for internal server error
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  // console.log("id", id);

  //check if the product id is valid : handle 404 error
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid product id" });
  }
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log("error in deleting product", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body; //user will send the updated data
  // console.log("product", product);

  //check if the product id is valid : handle 404 error
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid product id" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    }); //new: true is used to return the updated product
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.log("error in updating product", error.message);
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};
