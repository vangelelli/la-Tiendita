import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CartWidget.css';


const CartWidget = () => {

    const { cart, vaciarCarrito, deleteItem } = useContext(CartContext);

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
                     // desde el cartwidget creamos la funcion deleteItem y le pasamos la funcion por parametros
                   ))}
                   <h3> Total de Productos {cart.map(item=> item.cantidad).reduce((a,b) => a + b)}</h3>
                   <h3>Precio Total {cart.map(item => item.price * item.cantidad).reduce((a,b) => a + b)}</h3>
                   <button onClick={vaciarCarrito}> Vaciar el Carrito</button>
               </>        
           )}
       </>
    );
};

export default CartWidget;
