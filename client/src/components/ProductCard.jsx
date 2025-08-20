import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card-media">
        {product?.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-sm">No image</span>
        )}
      </div>
      <div className="font-medium truncate">{product?.name || 'Untitled'}</div>
      {product?.price !== undefined && (
        <div className="text-sm text-gray-600 mb-3">${product.price}</div>
      )}
      <div className="flex gap-2">
        <Link
          to={`/products/${product?._id || ''}`}
          className="btn-primary"
        >
          View
        </Link>
        <button className="btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
