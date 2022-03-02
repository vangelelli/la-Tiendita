import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartWidget.css";

import carrito from "../images/carrito.png";

const CartWidget = () => {
  const { cartAmount } = useContext(CartContext);

  return (
    <>
      {cartAmount > 0 && (
        <div className="cart-icon">
          <span>{cartAmount}</span>
        </div>
      )}
      <img src={carrito} width="40px" />
    </>
  );
};
export default CartWidget;
