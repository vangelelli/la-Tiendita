import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/api";
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

    const [product, setProducts] = useState();
    // el useParams es un HOOK de react-router-dom que nos provee para obtener los parametros de URL
    // el nombre productId es arbitrario y se define en el App
    const { itemId } = useParams();

    useEffect(() => {

        getProducts().then((products) => {
            const product = products.find((i) => i.id === Number(itemId));
            setProducts(product);
        }).catch((error) => {
            console.log(error);
        });
        
    }, [itemId]);

    return (
        <div>
            {!product ? <p>Cargando producto...</p> : <ItemDetail product={product} />}
        </div>
    )
};