import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import this for navigation
import { useCart } from "../context/CartContext"; // Import if you have CartContext

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Remove this line if you don't want to use cart yet

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        alert("Failed to load products");
      });
  }, []);

  if (loading) return <div className="text-center py-8">Loading products...</div>;
  if (products.length === 0) return <div className="text-center py-8">No products found!</div>;

  return (
    <div className="max-w-5xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map(product => (
        <div key={product._id} className="bg-white shadow-md rounded-lg p-6 flex flex-col">
          {/* Link image and name to product details */}
          <Link to={`/products/${product._id}`}>
            <img src={product.image} alt={product.name} className="h-40 mb-4 object-contain rounded" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
          </Link>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <span className="text-green-700 font-bold mb-2">₹{product.price}</span>
          <button
            className="mt-auto bg-green-700 text-white rounded px-4 py-2 hover:bg-green-800"
            onClick={() => addToCart(product)} // Enable Add to Cart here if you use context
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
