import "./Item.css";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div className="itemContainer">
      <Link to={"/producto/" + item.id}>
        <p className="title">{item.title}</p>
        <img src={item.pictureUrl} alt="Imagen del Producto" width="250px" />
        <p className="price">${item.price}</p>
        <p className="description">{item.description}</p>
      </Link>
    </div>
  );
}
