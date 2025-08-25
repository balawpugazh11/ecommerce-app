import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, setQuantity } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);

  if (cartItems.length === 0)
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4 text-white">Your cart is empty.</h2>
        <Link
          to="/products"
          className="bg-green-700 text-white rounded px-5 py-2 hover:bg-green-800 gap-3"
        >
          Shop Products
        </Link>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-8 text-white">Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li
            key={item._id}
            className="flex items-center justify-between border-b py-5 gap-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain rounded border"
              />
              <div>
                <div className="font-semibold text-white ">{item.name}</div>
                <div className="text-green-700 font-bold">₹{item.price}</div>
                <div className="text-sm text-gray-300">Subtotal: ₹{(item.price * (item.quantity || 1)).toLocaleString()}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Decrease quantity"
                className="px-3 py-1 bg-gray-200 rounded"
                onClick={() => decreaseQuantity(item._id)}
              >
                -
              </button>
              <input
                type="number"
                min={1}
                value={item.quantity || 1}
                onChange={(e) => setQuantity(item._id, parseInt(e.target.value, 10))}
                className="w-14 text-center rounded border border-gray-300"
              />
              <button
                aria-label="Increase quantity"
                className="px-3 py-1 bg-gray-200 rounded"
                onClick={() => increaseQuantity(item._id)}
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item._id)}
              className="text-red-600 px-2 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="text-right mt-8">
        <div className="text-xl mb-3">
          <span className="font-bold">Total: </span>
          <span className="font-bold text-green-700">₹{subtotal.toLocaleString()}</span>
        </div>
        <Link
          to="/checkout"
          className="bg-green-700 text-white rounded px-6 py-3 hover:bg-green-800"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
