import React  from 'react'
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getProducts } from '../api/api';
import ItemList from './ItemList';
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';


// la funcion de este componente es obtener la lista de producto, guardarla en un estado y pasarsela a otro componente hijo. Un quilombo
// creamos el componente ItemListContainer y le creamos un prop que puede cambiar
export default function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);  // arrancamos con un array vacio por defecteo, porque no sabemos cuantos productos vamos a tener
    const { categoryName } = useParams();


   // cuando se monte el componente, voy a buscar los productos
   useEffect(() => {

    // tengo que obtener los productos
    getProducts().then((products) => {
        if (!categoryName) {    // si la categoria es false largame todos los items, si es true mandame a esa categoria
            setProducts(products);
        } else {
         const itemsPorCategoria = products.filter((producto) => {
            return producto.category === categoryName;
         });

         setProducts(itemsPorCategoria);  // generamos esto para que se guarden los productos
        }

     }).catch((error) => {
        console.log(error);
     });
    },  [categoryName]);
    
  
    /*
    function onAddItem(itemCount) {
        console.log(itemCount);
    }
    */
    return (
        <div >
            <p className='saludo'>  {greeting}</p>
            { products.length > 0 ? <ItemList products={products} /> : <p>Cargando..</p>}    
        </div>
    )
}