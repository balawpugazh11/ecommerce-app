import express from 'express';
import Cart from '../models/Cart-items.js';
import { verifyFirebaseToken } from '../middleware/firebaseAuth.js';


const router = express.Router();

// Get current user's cart
router.get('/', verifyFirebaseToken, async (req, res) => {
  let cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
  if (!cart) {
    cart = await Cart.create({ user: req.user._id, items: [] });
  }
  res.json(cart);
});

// Add item to cart
router.post('/add', verifyFirebaseToken, async (req, res) => {
  const { productId, quantity = 1 } = req.body;
  if (!productId) return res.status(400).json({ message: 'productId required' });

  let cart = await Cart.findOne({ user: req.user._id });
  if (!cart) cart = await Cart.create({ user: req.user._id, items: [] });

  const existing = cart.items.find(i => i.product.toString() === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }
  cart.updatedAt = new Date();
  await cart.save();
  await cart.populate('items.product');
  res.status(201).json(cart);
});

// Update item quantity
router.put('/item/:productId', verifyFirebaseToken, async (req, res) => {
  const { quantity } = req.body;
  if (quantity == null || quantity < 1) return res.status(400).json({ message: 'quantity must be >= 1' });

  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) return res.status(404).json({ message: 'Cart not found' });

  const item = cart.items.find(i => i.product.toString() === req.params.productId);
  if (!item) return res.status(404).json({ message: 'Item not in cart' });

  item.quantity = quantity;
  cart.updatedAt = new Date();
  await cart.save();
  await cart.populate('items.product');
  res.json(cart);
});

// Remove item
router.delete('/item/:productId', verifyFirebaseToken, async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) return res.status(404).json({ message: 'Cart not found' });

  cart.items = cart.items.filter(i => i.product.toString() !== req.params.productId);
  cart.updatedAt = new Date();
  await cart.save();
  await cart.populate('items.product');
  res.json(cart);
});

// Clear cart
router.delete('/clear', verifyFirebaseToken, async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) return res.status(404).json({ message: 'Cart not found' });
  cart.items = [];
  cart.updatedAt = new Date();
  await cart.save();
  res.json(cart);
});

export default router;
