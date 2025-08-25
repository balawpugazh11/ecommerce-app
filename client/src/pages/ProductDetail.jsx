import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center py-8">Loading product...</div>;
  if (!product) return <div className="text-center py-8 text-red-500">Product not found.</div>;

  // OPTIONAL: Prevent adding duplicate product (if needed)
  const isInCart = cartItems?.some(item => item._id === product._id);

  return (
    <div className="max-w-3xl mx-auto py-10 flex flex-col md:flex-row md:gap-10 items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-80 h-80 object-contain bg-white rounded shadow mb-6 md:mb-0"
      />
      <div>
        <h1 className="text-3xl font-bold mb-2 text-white">{product.name}</h1>
        <p className="text-white mb-4">{product.description}</p>
        <div className="text-2xl text-green-700 font-bold mb-4">₹{product.price}</div>
        <button
          className="bg-green-700 text-white rounded px-6 py-3 font-semibold hover:bg-green-800 disabled:bg-gray-400"
          onClick={() => addToCart(product)}
          disabled={isInCart} // disables if product is already in cart
        >
          {isInCart ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
