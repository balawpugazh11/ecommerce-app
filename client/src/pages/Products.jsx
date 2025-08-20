import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [visibleCount, setVisibleCount] = useState(8);
  // const [viewType, setViewType] = useState("grid"); // For future Grid/List switch

  const products = [
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

  const categories = [
    { id: "all", name: "All Apple Products", icon: "🍎" },
    { id: "smartphones", name: "iPhone", icon: "📱" },
    { id: "laptops", name: "MacBooks", icon: "💻" },
    { id: "tablets", name: "iPad", icon: "📝" },  // Changed icon for clarity
    { id: "audio", name: "Audio", icon: "🎧" },
    { id: "wearables", name: "Apple Watch", icon: "⌚" },
    { id: "desktops", name: "iMac", icon: "🖥️" }
  ];

  // Filter and sort
  const filteredAndSortedProducts = products
    .filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const displayedProducts = filteredAndSortedProducts.slice(0, visibleCount);

  const handleLoadMore = () => setVisibleCount(visibleCount + 8);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Apple Products</h1>
          <p className="text-gray-600 text-lg">
            Discover the latest iPhone, Mac, iPad, Apple Watch, and more
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Products
              </label>
              <input
                type="text"
                placeholder="Search by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-low">Price (Low to High)</option>
                <option value="price-high">Price (High to Low)</option>
                <option value="rating">Rating (High to Low)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count and View Toggle */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing {displayedProducts.length} of {filteredAndSortedProducts.length} products
          </p>
          {/* Placeholder for future Grid/List toggle */}
          <div className="flex gap-2">
            <button
              className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
              // onClick={() => setViewType("grid")}
              disabled
              style={{ opacity: 0.7 }}
            >
              Grid
            </button>
            <button
              className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
              // onClick={() => setViewType("list")}
              disabled
              style={{ opacity: 0.7 }}
            >
              List
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredAndSortedProducts.length > visibleCount && (
          <div className="text-center mt-12">
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              onClick={handleLoadMore}
            >
              Load More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
