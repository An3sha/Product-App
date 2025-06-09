import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/product.js";
import cors from "cors";

dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

//middleware to parse the body of the request
app.use(express.json());

app.use("/api/products", productRoutes);

// app.post("/api/products", async (req, res) => {
//   const product = req.body; // user will send this data

//   if (!product.name || !product.price || !product.image) {
//     return res
//       .status(400)
//       .json({ success: false, message: "All fields are required" }); //400 is the status code for bad request
//   }

//   const newProduct = new Product(product);

//   try {
//     await newProduct.save();
//     res.status(201).json({
//       success: true,
//       message: "Product created successfully",
//       data: newProduct,
//     }); //201 is the status code for created
//   } catch (error) {
//     res
//       .status(500)
//       .json({ success: false, message: "Server Error", error: error.message }); //500 is the status code for internal server error
//   }
// });

// app.delete("/api/products/:id", async (req, res) => {
//   const { id } = req.params;
//   // console.log("id", id);

//   try {
//     await Product.findByIdAndDelete(id);
//     res.status(200).json({
//       success: true,
//       message: "Product deleted successfully",
//     });
//   } catch (error) {
//     console.log("error in deleting product", error.message);
//     res.status(404).json({
//       success: false,
//       message: "Product not found",
//       error: error.message,
//     });
//   }
// });

// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({}); //passing an empty object to find all the products
//     res.status(200).json({ success: true, data: products });
//   } catch (error) {
//     console.log("error in getting products", error.message);
//     res
//       .status(500)
//       .json({ success: false, message: "Server Error", error: error.message });
//   }
// });

// // PUT request is used to update all fields of a resource
// // PATCH request is used to update some fields of a resource

// app.put("/api/products/:id", async (req, res) => {
//   const { id } = req.params;
//   const product = req.body; //user will send the updated data
//   // console.log("product", product);

//   //check if the product id is valid : handle 404 error
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res
//       .status(404)
//       .json({ success: false, message: "Invalid product id" });
//   }

//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(id, product, {
//       new: true,
//     }); //new: true is used to return the updated product
//     res.status(200).json({
//       success: true,
//       message: "Product updated successfully",
//       data: updatedProduct,
//     });
//   } catch (error) {
//     console.log("error in updating product", error.message);
//     res
//       .status(500)
//       .json({ success: false, message: "Server Error", error: error.message });
//   }
// });

const port = process.env.PORT || 3000;

// Connect to database first, then start the server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  });

//API stands for Application Programming Interface
//API is a set of rules that allows two applications to communicate with each other
//API is a way to communicate between two applications, systems, components, modules
