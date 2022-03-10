import React, { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ stock, initial, onAdd }) {
  const [itemCounter, setItemCounter] = useState(initial);

  function sumar() {
    if (itemCounter < stock) {
      setItemCounter(itemCounter + 1);
    }
  }

  function restar() {
    if (itemCounter > 0) {
      setItemCounter(itemCounter - 1);
    }
  }

  function addToCart() {
    onAdd(itemCounter);
  }

  return (
    <div className="contenedorDelCarro">
      <div className="boton">
        <button onClick={sumar}> + </button> {"  "}
        <p>{itemCounter}</p>
        <button onClick={restar}> - </button> {"  "}
      </div>
      <button className="botonAgregar" onClick={addToCart}>
        {" "}
        Agregar al carrito{" "}
      </button>{" "}
      {"  "}
    </div>
  );
}
