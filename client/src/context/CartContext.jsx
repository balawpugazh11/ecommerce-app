import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    const parsed = storedCart ? JSON.parse(storedCart) : [];
    // Ensure each item has a quantity field (migrate older carts)
    return Array.isArray(parsed)
      ? parsed.map((item) => ({ ...item, quantity: item.quantity ? item.quantity : 1 }))
      : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart (increase quantity if already exists)
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item._id === product._id);
      if (existing) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove a product from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  // Decrease quantity (min 1)
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item._id !== id) return item;
        const nextQty = (item.quantity || 1) - 1;
        return { ...item, quantity: nextQty < 1 ? 1 : nextQty };
      })
    );
  };

  // Optional: set quantity directly (>=1)
  const setQuantity = (id, quantity) => {
    const normalized = Number.isFinite(quantity) && quantity > 0 ? Math.floor(quantity) : 1;
    setCartItems((prev) =>
      prev.map((item) => (item._id === id ? { ...item, quantity: normalized } : item))
    );
  };

  // Optional: clear entire cart
  const clearCart = () => setCartItems([]);

  // Derived value for cart icon
  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <CartContext.Provider
      value={{
        cartItems, // array of cart items
        addToCart, // function to add item
        removeFromCart, // function to remove item
        increaseQuantity, // function to increment quantity
        decreaseQuantity, // function to decrement quantity
        setQuantity, // function to set quantity
        clearCart, // function to clear cart
        cartCount, // total items in cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
