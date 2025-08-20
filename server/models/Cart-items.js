import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
	product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
	quantity: { type: Number, required: true, min: 1, default: 1 }
});

const cartSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
	items: [cartItemSchema],
	updatedAt: { type: Date, default: Date.now }
});

cartSchema.methods.calculateTotal = async function() {
	await this.populate('items.product');
	return this.items.reduce((sum, i) => sum + (i.product.price * i.quantity), 0);
};

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
