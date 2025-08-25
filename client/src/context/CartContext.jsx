import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product) => {
    // Prevent duplicates
    setCartItems((prev) =>
      prev.some((item) => item._id === product._id) ? prev : [...prev, product]
    );
  };

  // Remove a product from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  // Optional: clear entire cart
  const clearCart = () => setCartItems([]);

  // Derived value for cart icon
  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems, // array of cart items
        addToCart, // function to add item
        removeFromCart, // function to remove item
        clearCart, // function to clear cart
        cartCount, // total items in cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
