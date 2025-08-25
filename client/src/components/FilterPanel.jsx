import React from "react";

const FilterPanel = ({
  open,
  onClose,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  categories,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 h-full w-80 bg-white border-r border-black shadow-xl transform transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ maxWidth: "90vw" }}
    >
      <div className="flex items-center justify-between p-4 border-b border-black bg-green-700">
        <span className="font-bold text-white text-lg">Filters</span>
        <button
          className="text-white text-2xl font-bold hover:text-green-300 px-2"
          onClick={onClose}
          aria-label="Close filter panel"
        >
          ×
        </button>
      </div>
      <div className="p-4 space-y-6">
        <div>
          <label className="block text-sm font-bold text-green-700 mb-2">Search Products</label>
          <input
            type="text"
            placeholder="Search by name or description..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-green-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-green-700 mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-green-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.icon} {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-green-700 mb-2">Sort By</label>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="w-full px-4 py-2 border border-green-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent"
          >
            <option value="name">Name (A-Z)</option>
            <option value="price-low">Price (Low to High)</option>
            <option value="price-high">Price (High to Low)</option>
            <option value="rating">Rating (High to Low)</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default FilterPanel;
