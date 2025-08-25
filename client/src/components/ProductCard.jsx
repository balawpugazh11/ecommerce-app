import React from 'react';
import { Link } from 'react-router-dom';
import productDetail from '../pages/ProductDetail';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card-media shadow-lg">
        {product?.image ? (
          <img src={product.image} alt={product.name} className="w-auto h-auto object-cover border rounded-lg" />
        ) : (
          <span className="text-white text-sm">No image</span>
        )}
      </div>
      <div className="font-medium truncate mt-2">{product?.name || 'Untitled'}</div>
      {product?.price !== undefined && (
        <div className="text-sm text-white  mb-3">Rs.{product.price}</div>
      )}
      <div className="flex px-4 gap-4">
        <Link
          to={`/products/${product?._id || ''}`}
          className="btn-primary bg-white text-black rounded-md p-1 hover:bg-black hover:text-white"
        >
          View Product
        </Link>
        <button className="btn-primary p-1 bg-green-600 rounded-md hover:bg-green-900">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
