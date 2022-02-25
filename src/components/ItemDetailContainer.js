import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function ItemDetailContainer() {

    const [product, setProducts] = useState();
    // el useParams es un HOOK de react-router-dom que nos provee para obtener los parametros de URL
    // el nombre productId es arbitrario y se define en el App
    const { itemId } = useParams();

    useEffect(() => {
        
        // el itemRef hace la referencia a mi documento, para conocer el nombre de la coleccion y mi id 
        const itemRef = doc(db, "products", itemId);
        getDoc(itemRef)
        .then((snapshot) => {

            if(snapshot.exists()) {
                setProducts({ id: snapshot.id, ...snapshot.data()})
            }
        })
        .catch(error => {
            console.log(error)
        })
        
    }, [itemId]);


    return (
        <div>
            {!product ? <p>Cargando producto...</p> : <ItemDetail product={product} />}
        </div>
    )
};