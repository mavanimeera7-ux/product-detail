// const { Product } = require("../models/productModel.js");

// // @desc    Get all products
// // @route   GET /api/products
// // @access  Public
// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Get single product by ID
// // @route   GET /api/products/:id
// // @access  Public
// const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404).json({ message: "Product not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Create a new product
// // @route   POST /api/products
// // @access  Public
// const createProduct = async (req, res) => {
//   const { name, description, price, category, rating, image } = req.body;

//   const product = new Product({
//     name,
//     description,
//     price,
//     category,
//     rating,
//     image,
//   });

//   try {
//     const createdProduct = await product.save();
//     res.status(201).json(createdProduct);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // @desc    Update a product
// // @route   PUT /api/products/:id
// // @access  Public
// const updateProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (product) {
//       const { name, description, price, category, rating, image } = req.body;

//       product.name = name || product.name;
//       product.description = description || product.description;
//       product.price = price || product.price;
//       product.category = category || product.category;
//       product.rating = rating || product.rating;
//       product.image = image || product.image;

//       const updatedProduct = await product.save();
//       res.json(updatedProduct);
//     } else {
//       res.status(404).json({ message: "Product not found" });
//     }
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // @desc    Delete a product
// // @route   DELETE /api/products/:id
// // @access  Public
// const deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (product) {
//       await product.remove();
//       res.json({ message: "Product removed" });
//     } else {
//       res.status(404).json({ message: "Product not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports= {
//   getProducts,
//   getProductById,
//   createProduct,
//   updateProduct,
//   deleteProduct,
// };



import Product from "../models/productModel.js"

const getproducts = async (req, res) => {
  try{
    const products = await Product.find({});
    res.json(products);
  }catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getproductById = async (req, res) => {
try{
   const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createproduct = async (req, res) => {
  const { name, description, price, category, rating, image } = req.body;

  const product = new Product({
    name,description,price,category,rating,image,});

  try {
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateproduct = async (req, res) => {

  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      const { name, description, price, category, rating, image } = req.body;

      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.category = category || product.category;
      product.rating = rating || product.rating;
      product.image = image || product.image;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteproduct = async (req, res) => {

  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.remove();
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {getproducts,getproductById,createproduct,updateproduct,deleteproduct}
