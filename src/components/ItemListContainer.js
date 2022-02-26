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
    getProducts(categoryName)
     .then(snapshot => {
          // el doc.data le pide a firestore todos los documentos de producst. El punto map es porqe importa una coleccion
          const productsMap = snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data() }))
          setProducts(productsMap)
       })
      .catch(error => {
          console.log(error)
       })
       .finally(() => console.log('fin promesa'))
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