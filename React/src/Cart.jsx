import React, { useState, useEffect } from 'react';
import dummyFoodData from './CartData';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCartData(dummyFoodData.map(item => ({ ...item, quantity: 0 })));
  }, []);

  const handleAdd = (id) => {
    const updatedCart = cartData.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartData(updatedCart);
  };

  const handleRemove = (id) => {
    const updatedCart = cartData.map(item =>
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartData(updatedCart);
  };

  const getTotalPrice = () => {
    return cartData.reduce((total, item) =>
      total + item.price * item.quantity, 0);
  };

  const handleViewCart = () => {
    navigate('/view')

  };

  const addtoCart = (id) => {
    console.log(id);
    const updatedCart = cartData.map(data =>
      data.id === id ? { ...data, quantity: 1 } : data
    );
    setCartData(updatedCart);

  };


  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <button onClick={handleViewCart}>View Cart</button>
      <ul className="cart-items">
        {cartData.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p> quantity:{item.quantity}  </p>
              {
                item.quantity === 0 ? (<button onClick={() => addtoCart(item.id)}> addtoCart</button>) : (<>
                  <button onClick={() => handleAdd(item.id)}> +</button>
                  <button onClick={() => handleRemove(item.id)} > -</button>
                </>)
              }
            </div>
          </li>
        ))}
      </ul>
      <p>Total Price: ${getTotalPrice()}</p>
    </div>
  );
};

export default Cart;


let arr = [1, 2, 3, 4, 5]

let sum = arr.reduce((a, b) => {
  return a + b
})
console.log(sum);