import express from 'express';
import { protect } from '../middleware/auth.js';
import Order from '../models/orders.js';
import Cart from '../models/Cart-items.js';

const router = express.Router();

// Create order from current cart
router.post('/', protect, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const products = cart.items.map(i => ({ product: i.product._id, quantity: i.quantity }));
    const total = cart.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

    const order = await Order.create({ user: req.user._id, products, total });

    // Clear cart after placing order
    cart.items = [];
    await cart.save();

    return res.status(201).json(order);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Get user's orders
router.get('/', protect, async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate('products.product');
  res.json(orders);
});

// Get single order
router.get('/:id', protect, async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id, user: req.user._id }).populate('products.product');
  if (!order) return res.status(404).json({ message: 'Order not found' });
  res.json(order);
});

export default router;
