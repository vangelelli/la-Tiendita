import "./ItemDetail.css";
import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ItemDetail({ product }) {
  const [itemAmount, setItemAmount] = useState(false);
  const { addToCart, cart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setItemAmount(true);
    addToCart(cantidad, product);
  };

  return (
    <div className="contenedor">
      <p className="title">{product.title}</p>
      <img src={product.pictureUrl} alt="Imagen del Producto" width="150px" />
      <p className="price">{product.price}</p>
      <p className="description">
        {product.description} El producto mejor vendido de la Tiendita!
      </p>

      {!itemAmount ? (
        <ItemCount stock={20} initial={1} onAdd={onAdd} />
      ) : (
        <Link
          to="/cart"
          style={{
            color: "#00008B",
            textDecoration: "none",
            padding: "1.5rem",
          }}
        >
          {" "}
          Ir al Carrito
        </Link>
      )}
    </div>
  );
}
