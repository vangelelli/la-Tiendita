import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const cartAmount = cart
    .map((item) => item.cantidad)
    .reduce((a, b) => a + b, 0);

  const addToCart = (cantidad, item) => {
    if (isOnCart(item.id)) {
      alert("Ya se encuentra en el carrito");
      sumarCantidad(cantidad, item);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const sumarCantidad = (cantidad, item) => {
    const copia = [...cart];
    copia.forEach((producto) => {
      if (producto.id === item.id) {
        producto.cantidad += cantidad;
      }
    });
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const isOnCart = (id) => {
    const respuesta = cart.some((prod) => prod.id === id);
    return respuesta;
  };

  console.log(cart);
  return (
    <CartContext.Provider
      value={{ cart, addToCart, vaciarCarrito, deleteItem, cartAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
