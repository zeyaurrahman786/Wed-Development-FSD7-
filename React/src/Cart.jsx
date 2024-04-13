import React, { useState, useEffect } from 'react';
import dummyFoodData from './CardData';
import './Cart.css'; 

const Cart = () => {
  const [cartData, setCartData] = useState([]);


  useEffect(() => {
    setCartData(dummyFoodData);
  }, [])


  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <button> ViewCart</button>
      <ul className="cart-items">
        {cartData.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <button>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;