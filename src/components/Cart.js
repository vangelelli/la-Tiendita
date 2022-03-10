import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, vaciarCarrito, deleteItem } = useContext(CartContext);
  const finalizarCompra = () => {
    const now = new Date();
    const compra = {
      buyer: {
        name: "Pepe",
        phone: "26169696385",
        email: "pepe@gmail.com",
      },
      items: cart.map(({ id, title, price }) => ({
        id,
        title,
        price,
      })),
      date: now.toLocaleDateString(),
      total: cart
        .map((item) => item.price * item.cantidad)
        .reduce((a, b) => a + b),
    };

    console.log(compra);
  };

  return (
    <>
      {cart.length === 0 ? (
        <>
          <h2> El carrito se encuentra vacio, retorna al Home</h2>
          <Link to="/"> Home </Link>
        </>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <h3>{item.cantidad}</h3>
              <button onClick={() => deleteItem(item.id)}> X </button>
            </div>
          ))}
          <div className="total">
            <h3>
              {" "}
              Total de Productos:{" "}
              {cart.map((item) => item.cantidad).reduce((a, b) => a + b)}
            </h3>
            <h3>
              Precio Total: ${" "}
              {cart
                .map((item) => item.price * item.cantidad)
                .reduce((a, b) => a + b)}
            </h3>
          </div>
          <div className="botonCart">
            <button onClick={vaciarCarrito}> Vaciar el Carrito</button>
            <button onClick={finalizarCompra}> Terminar Compra</button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
