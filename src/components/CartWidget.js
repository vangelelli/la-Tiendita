import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { cartAmount } = useContext(CartContext);
 
  return cartAmount > 0  && (
  
    <div className="cart-icon">
        <i className="fas fa-shopping-cart">
          <span>{cartAmount}</span>
        </i>
      
    </div>
  );
}
export default CartWidget;