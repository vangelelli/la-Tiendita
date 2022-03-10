import React from "react";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    getProducts(categoryName)
      .then((snapshot) => {
        const productsMap = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsMap);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => console.log("fin promesa"));
  }, [categoryName]);

  return (
    <div>
      <p className="saludo"> {greeting}</p>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <p>Cargando..</p>
      )}
    </div>
  );
}
