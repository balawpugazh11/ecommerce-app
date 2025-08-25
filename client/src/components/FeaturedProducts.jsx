import React from "react";
import { Link } from "react-router-dom";
const defaultProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    type: "iPhone",
    price: "₹1,25,000",
    oldPrice: "₹1,39,900",
    discount: "-11%",
    rating: 4.9,
    reviews: 1247,
    badge: "Best Seller",
    image: "/iphone15.png",
  },
  {
    id: 2,
    name: "iPhone 15",
    type: "iPhone",
    price: "₹79,900",
    oldPrice: "₹89,900",
    discount: "-11%",
    rating: 4.8,
    reviews: 892,
    badge: "New",
    image: "/iphone15.png",
  },
  {
    id: 3,
    name: "iPhone 14 Plus",
    type: "iPhone",
    price: "₹69,900",
    oldPrice: "₹79,900",
    discount: "-12%",
    rating: 4.7,
    reviews: 540,
    badge: "Sale",
    image: "/iphone15.png",
  },
  {
    id: 4,
    name: "iPhone 13 Pro Max",
    type: "iPhone",
    price: "₹99,900",
    oldPrice: "₹1,09,900",
    discount: "-9%",
    rating: 4.8,
    reviews: 1100,
    badge: "Premium",
    image: "/iphone15.png",
  },
];

function Badge({ badge }) {
  let badgeColors = {
    "Best Seller": "bg-yellow-400 text-yellow-900",
    New: "bg-green-700 text-white",
    Sale: "bg-orange-400 text-white",
    Premium: "bg-yellow-600 text-white",
  };
  if (!badge) return null;
  return (
    <span className={`absolute top-3 left-3 px-2 py-1 text-xs rounded font-semibold ${badgeColors[badge] || "bg-gray-200"}`}>
      {badge}
    </span>
  );
}

function FeaturedProducts({ products = defaultProducts }) {
  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-white ">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white p-5 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center">
            {/* Badge */}
            <Badge badge={product.badge} />
            {/* Image */}
            <img src={product.image} alt={product.name} className="h-32 object-contain my-3" />
            {/* Product Type */}
            <p className="text-white text-sm mb-1">{product.type}</p>
            {/* Name */}
            <h3 className="font-semibold mb-1">{product.name}</h3>
            {/* Rating */}
            <div className="flex items-center mb-1">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="font-bold">{product.rating}</span>
              <span className="text-gray-500 text-xs ml-1">({product.reviews})</span>
            </div>
            {/* Price + Discount */}
            <div className="flex items-center mb-2">
              <span className="text-lg font-bold mr-2">{product.price}</span>
              {product.oldPrice && (
                <span className="text-gray-400 line-through mr-2">{product.oldPrice}</span>
              )}
              {product.discount && (
                <span className="bg-yellow-100 text-yellow-800 px-2 rounded text-xs">{product.discount}</span>
              )}
            </div>
            {/* Add to Cart Button */}
            <button
              className="w-full bg-green-900 text-white py-2 rounded mt-auto hover:bg-green-800 transition font-semibold"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {/* If you want a 'View All Products' button */}
      <div className="flex justify-center mt-6">
        <Link
          to="/products"
          className="border border-green-700 text-white px-6 py-2 rounded hover:bg-green-500 hover:text-black transition bg-green-900 "
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProducts;
