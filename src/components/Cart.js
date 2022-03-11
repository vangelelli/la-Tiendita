import React, { useContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const [buyer, setBuyer] = useState();
  const [orderId, setOrderId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { cart, vaciarCarrito, deleteItem, cartAmount, totalPrice } =
    useContext(CartContext);

  const handleChange = ({ target }) => {
    setBuyer({
      ...buyer,
      [target.name]: target.value,
    });
  };

  const saveOrder = (order) => {
    addDoc(collection(db, "orders"), order)
      .then((response) => {
        setOrderId(response.id);
        vaciarCarrito();
      })
      .finally(() => {
        setIsLoading(false);
        setIsReady(true);
      });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const compra = {
      buyer,
      items: cart.map(({ id, title, price }) => ({
        id,
        title,
        price,
      })),
      date: new Date().toLocaleDateString(),
      total: totalPrice,
    };

    saveOrder(compra);
  };

  if (isReady) return orderId && <p>Tu ID de compra es: {orderId} </p>;

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
            <h3> Total de Productos: {cartAmount}</h3>
            <h3>Precio Total: $ {totalPrice}</h3>
          </div>

          <div className="botonCart">
            <button onClick={vaciarCarrito}>Vaciar el Carrito</button>
          </div>

          <form onSubmit={finalizarCompra}>
            <input name="name" onChange={handleChange} />
            <input name="email" onChange={handleChange} />
            <input name="phone" onChange={handleChange} />
            <button> Terminar Compra</button>
          </form>

          {isLoading && <p>Guardando tu compra...</p>}
        </>
      )}
    </>
  );
};

export default Cart;
