const Product = require('../models/products');

// Get all mobiles
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Get single mobile
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Mobile not found' });
  res.json(product);
};

// Add a mobile
exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
};

// Update a mobile
exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!product) return res.status(404).json({ message: 'Mobile not found' });
  res.json(product);
};

// Delete a mobile
exports.deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ message: 'Mobile not found' });
  res.json({ message: 'Mobile deleted' });
};
