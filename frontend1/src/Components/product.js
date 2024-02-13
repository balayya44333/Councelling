// Product.js
import React from 'react';

const Product = ({ title, price, image }) => (
  <div className="product-card">
    <img className="product-image" src={image} alt={title} />
    <div className="product-details">
      <div className="product-title">{title}</div>
      <div className="product-price">${price.toFixed(2)}</div>
    </div>
  </div>
);

export default Product;
