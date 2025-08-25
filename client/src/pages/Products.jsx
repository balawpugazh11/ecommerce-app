import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom"; // Import this for navigation
import { useCart } from "../context/CartContext"; // Import if you have CartContext
import FilterPanel from "../components/FilterPanel";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // filter/search/sort state
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const { addToCart } = useCart(); // Remove this line if you don't want to use cart yet

  useEffect(() => {
    const baseUrl =
      import.meta.env.VITE_API_URL ||
      (window.location.port === '5173' ? 'http://localhost:5000' : window.location.origin);
    fetch(`${baseUrl}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("Failed to load products");
        console.log("Failed to load products", error);
      });
  }, []);

  const categories = useMemo(() => {
    const uniqueBrands = Array.from(new Set(products.map((p) => p.brand))).sort();
    return [
      { id: "all", name: "All", icon: "*" },
      ...uniqueBrands.map((b) => ({ id: b, name: b, icon: "📱" })),
    ];
  }, [products]);

  const filteredAndSorted = useMemo(() => {
    let list = products;
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.model && p.model.toLowerCase().includes(q))
      );
    }
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.brand === selectedCategory);
    }
    if (sortBy === "name") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price-low") {
      list = [...list].sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === "price-high") {
      list = [...list].sort((a, b) => (b.price || 0) - (a.price || 0));
    }
    return list;
  }, [products, searchTerm, selectedCategory, sortBy]);

  if (loading) return <div className="text-center py-8 text-white">Loading products...</div>;
  if (products.length === 0) return <div className="text-center py-8 text-white">No products found!</div>;

  return (
    <div className="max-w-6xl mx-auto py-8 px-3">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-white">Products</h1>
        <button
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
          onClick={() => setFilterOpen(true)}
        >
          Filters
        </button>
      </div>

      <FilterPanel
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
        categories={categories}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredAndSorted.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded-lg p-6 flex flex-col">
            <Link to={`/products/${product._id}`}>
              <img src={product.image} alt={product.name} className="h-40 mb-4 object-contain rounded" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
            </Link>
            <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
            <span className="text-green-700 font-bold mb-2">₹{product.price}</span>
            <button
              className="mt-auto bg-green-700 text-white rounded px-4 py-2 hover:bg-green-800"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
