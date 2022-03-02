import { addDoc, collection, doc } from "firebase/firestore";
import React, { useState} from "react";
import { db } from "../firebase";
import './AddItemContainer.css';

const AddItemContainer = () => {
    
    // Mis Estados con los campos del formulario
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState ("")
    const [description, setDescription] = useState ("")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState (0)
    const [image, setImage]  = useState()

    // Mis funciones para manejar el cambio en los inputs y setear mis estados
    const handleTitleChange = event => setTitle(event.target.value)
    const handleDescrptionChange = event => setDescription(event.target.value)
    const handleCategoryChange = event => setCategory(event.target.value)
    const handlePriceChange = event => setPrice(event.target.value)
    const handleStockChange = event => setStock(event.target.value)
    const handleImageChange = event => setImage(event.target.files[0])

    const onSubmit = async(event) => {
        event.preventeDefault();
        console.log(title)
        // validamos el formulario
        if (![title,category,description].some(field => field === "")) {
           
            // obtengo la referencia a mi collection
            const itemCollection = collection(db, "products")
            // creo el objeto que voy a agregar, en este caso products
            const newProduct = {
               title: title,
               description: description,
               category: category,
               price: price,
               stock: stock,
            }
            // agrego el product a mi collection como un nuevo documento
            addDoc(itemCollection, newProduct)
            .then(doc => {
                console.log("Se guardo el documento correctamente", doc.id)
            })
            .catch(error => {
                console.log(error)
            })

        } else {
            console.log("Hay valores vacíos")
        }
    }



    return (
        <div className="formularioProducto">
            <h1> Agregar Nuevo Producto</h1>
            <form onSubmit={onSubmit}>
                <div className="item">
                    <label> Nombre del Producto</label>
                    <input value={title} onChange={handleTitleChange} type="text" />
                </div>
                <div className="item">
                    <label> Descripción del Producto</label>
                    <input value={description} onChange={handleDescrptionChange} name="title" type="text" />
                </div>
                <div className="item">
                    <label> Categoría </label>
                    <input value={category} onChange={handleCategoryChange} name="title" type="text" />
                </div>
                <div className="item">
                    <label> Precio </label>
                    <input value={price} onChange={handlePriceChange} name="title" type="text" />
                </div>
                <div className="item">
                    <label> stock </label>
                    <input value={stock} onChange={handleStockChange} name="title" type="text" />
                </div>
                <div className="item">
                    <label>Imagen</label>
                    <input value={image}name="file" onChange={handleImageChange} type="file" />
                </div>
                <button className="botonFormulario" type="submit"> Enviar </button>
            </form>
        </div>
    );
}

export default AddItemContainer