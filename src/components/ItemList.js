import './ItemList.css';
import Item from './Item';


export default function ItemList({ products }) {

    // en mi array de products, tengo adentro un array de objetos
    // a ese array de objetos lo quiero transformar en un array de elementos JSX
    // el .map me permite pasar elementos a JSX
    return (
        <div>
            <div className='grilla'>
                {
                    products.map( function(producto) {
                        return (
                          <Item key={producto.id} item={producto}/>
                        ) 
                    } )
                }
            </div>
        </div>
    );
}
// la propiedad key es obligatoria, para que cada producto sea unico por eso usamos el id propio de cada item

