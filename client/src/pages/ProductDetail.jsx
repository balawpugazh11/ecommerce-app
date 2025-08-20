import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// If your products data is available globally, import it from a separate file or context.
// For now, the sample PRODUCTS array from Products.jsx is reused directly here.
const PRODUCTS = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 99999,
    image: "/iphone15.jpg",
    category: "smartphones",
    rating: 4.8,
    reviews: 156,
    description: "Latest iPhone with A17 Pro chip and titanium design"
  },
  {
    id: 2,
    name: "iPhone 15",
    price: 79999,
    image: "/iphone15.jpg",
    category: "smartphones",
    rating: 4.7,
    reviews: 203,
    description: "Powerful A16 Bionic chip with advanced camera system"
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 24999,
    image: "/airpods-pro.jpg",
    category: "audio",
    rating: 4.6,
    reviews: 234,
    description: "Active noise cancellation with spatial audio"
  },
  {
    id: 4,
    name: "MacBook Air M2",
    price: 119999,
    image: "/macbook-air.jpg",
    category: "laptops",
    rating: 4.9,
    reviews: 67,
    description: "Ultra-thin laptop with M2 chip"
  },
  {
    id: 5,
    name: "MacBook Pro M3",
    price: 199999,
    image: "/macbook-pro.jpg",
    category: "laptops",
    rating: 4.9,
    reviews: 89,
    description: "Professional laptop with M3 Pro chip"
  },
  {
    id: 6,
    name: "iPad Air",
    price: 59999,
    image: "/ipad-air.jpg",
    category: "tablets",
    rating: 4.7,
    reviews: 123,
    description: "Powerful tablet for work and creativity"
  },
  {
    id: 7,
    name: "iPad Pro",
    price: 89999,
    image: "/ipad-pro.jpg",
    category: "tablets",
    rating: 4.8,
    reviews: 156,
    description: "Ultimate iPad experience with M2 chip"
  },
  {
    id: 8,
    name: "Apple Watch Series 9",
    price: 39999,
    image: "/apple-watch.jpg",
    category: "wearables",
    rating: 4.6,
    reviews: 145,
    description: "Advanced health monitoring and fitness tracking"
  },
  {
    id: 9,
    name: "Apple Watch SE",
    price: 29999,
    image: "/apple-watch-se.jpg",
    category: "wearables",
    rating: 4.5,
    reviews: 98,
    description: "Essential features at an attractive price"
  },
  {
    id: 10,
    name: "AirPods",
    price: 19999,
    image: "/airpods.jpg",
    category: "audio",
    rating: 4.5,
    reviews: 312,
    description: "Wireless earbuds with seamless integration"
  },
  {
    id: 11,
    name: "HomePod mini",
    price: 9999,
    image: "/homepod-mini.jpg",
    category: "audio",
    rating: 4.4,
    reviews: 76,
    description: "Smart speaker with Siri and HomeKit"
  },
  {
    id: 12,
    name: "iMac",
    price: 149999,
    image: "/imac.jpg",
    category: "desktops",
    rating: 4.7,
    reviews: 45,
    description: "All-in-one desktop with stunning display"
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product by id (make sure to convert ID from URL to number)
  const product = PRODUCTS.find((prod) => prod.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">Product Not Found</h2>
          <p className="mb-5">Oops, the product you’re looking for doesn’t exist.</p>
          <button
            onClick={() => navigate("/products")}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8 flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-72 rounded-lg shadow"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.name}</h1>
          <p className="text-gray-600 mb-2 text-lg capitalize">
            Category: <span className="font-semibold">{product.category}</span>
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-yellow-500 text-lg font-bold">
              ★ {product.rating}
            </span>
            <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
          </div>
          <div className="mb-4">
            <span className="text-2xl text-blue-600 font-bold">
              ₹{product.price.toLocaleString()}
            </span>
          </div>
          <p className="mb-6 text-gray-700">{product.description}</p>
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            // onClick={} // Integrate with your cart logic
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
