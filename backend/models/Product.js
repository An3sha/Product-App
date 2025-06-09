import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // this will add createdAt and updatedAt fields to the schem
  }
);

const Product = mongoose.model("Product", productSchema); // put the name of the collection in the database

export default Product;
