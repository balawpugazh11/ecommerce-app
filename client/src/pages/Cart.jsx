import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialCartItems = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 99999,
    image: '/iphone15.jpg',
    quantity: 1
  },
  {
    id: 7,
    name: 'iPad Pro',
    price: 89999,
    image: '/ipad-pro.jpg',
    quantity: 2
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const navigate = useNavigate();

  const handleQuantityChange = (id, delta) => {
    setCartItems(items =>
      items
        .map(item =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const handleRemove = id => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <div className="text-7xl mb-4">🛒</div>
        <p className="text-gray-600 mb-6">Your cart is empty.</p>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          onClick={() => navigate('/products')}
        >
          Shop Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="bg-white rounded-lg shadow-md">
        <table className="w-full divide-y">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-3 px-4 font-semibold">Product</th>
              <th className="py-3 px-2 font-semibold text-center">Qty</th>
              <th className="py-3 px-2 font-semibold text-right">Price</th>
              <th className="py-3 px-2 font-semibold text-right"></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id} className="border-b">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                </td>
                <td className="py-4 px-2 text-center">
                  <div className="flex justify-center items-center gap-2">
                    <button
                      className="px-2 py-0.5 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => handleQuantityChange(item.id, -1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span className="px-2 font-semibold">{item.quantity}</span>
                    <button
                      className="px-2 py-0.5 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4 px-2 text-right font-semibold">
                  ₹{(item.price * item.quantity).toLocaleString()}
                </td>
                <td className="py-4 px-2 text-right">
                  <button
                    className="text-red-500 hover:underline text-sm"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            {/* Total */}
            <tr>
              <td colSpan={2} />
              <td className="py-4 px-2 font-bold text-right">Total</td>
              <td className="py-4 px-2 font-bold text-right text-blue-600 text-lg">
                ₹{cartTotal.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex flex-col md:flex-row md:justify-end gap-4">
        <button
          className="bg-white border border-blue-600 text-blue-600 px-8 py-2 rounded-lg font-semibold hover:bg-blue-50"
          onClick={() => navigate('/products')}
        >
          Continue Shopping
        </button>
        <button
          className="bg-blue-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-700"
          onClick={() => navigate('/checkout')}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
