import { createContext, useState } from "react";



export const CartContext = createContext([]);

const CartContextProvider = ({ children }) =>{
    const [cart, setCart] = useState([]);
 
    const cartAmount = cart.map(item=> item.cantidad).reduce((a,b) => a + b, 0) 
    // agregar productos al carrito
    const addToCart = (cantidad, item) => {
        if (isOnCart(item.id)) {
            alert('Ya se encuentra en el carrito');
            sumarCantidad(cantidad, item)
        } else {
            setCart([...cart, {...item, cantidad }]);
        }

        
    };

    // sumar la cantidad de productos
    const sumarCantidad = (cantidad, item) =>{
        const copia = [...cart];
        copia.forEach((producto) =>{
            if (producto.id === item.id) {
                producto.cantidad += cantidad;
            }
        })
    }

    // vaciamos todo el carrito
    const vaciarCarrito = () => {
        setCart([]);
    };

    // eliminar un producto del carrito
    const deleteItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
     };
     

    // vemos que los productos estan en el carrito
    const isOnCart = (id) => {
        const respuesta = cart.some((prod) => prod.id === id);
        return respuesta;
    };


    console.log(cart);
    return(
        <CartContext.Provider value={{ cart, addToCart, vaciarCarrito, deleteItem, cartAmount }}>
            {children}
        </CartContext.Provider>
    );

    
};

export default CartContextProvider