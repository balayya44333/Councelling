import React, { useState } from 'react';

const ProductList = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const productListStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    background: 'linear-gradient(45deg, #f3e7e9, #c7d3e3)',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
    padding: '10px',
    background: 'white',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  const cartListStyle = {
    marginTop: '20px',
    padding: '20px',
    background: 'linear-gradient(45deg, #c7d3e3, #f3e7e9)',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const cartItemStyle = {
    marginBottom: '10px',
    padding: '10px',
    background: 'white',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={productListStyle}>
      <h2 style={{ textAlign: 'center' }}>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} style={listItemStyle}>
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <div style={cartListStyle}>
        <h2 style={{ textAlign: 'center' }}>Cart</h2>
        <ul>
          {cart.map((cartProduct, index) => (
            <li key={index} style={cartItemStyle}>
              <span>{cartProduct.name} - ${cartProduct.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Product = () => {
  const products = [
    { name: 'ALOO GADDA', price: 10 },
    { name: 'CARROT', price: 15 },
    { name: 'CAPSICUM', price: 20 },
  ];

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Product;
