import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ lista }) => {
  return (
    <>
      <div className="items-grid">
        {lista.length ? (
          lista.map((prod) => (
            <Link to={`/detail/${prod.id}`} key={prod.id}>
              <Item {...prod}/>
            </Link>
          ))
        ) : (
          <p>No hay productos</p>
        )}
      </div>
    </>
  );
};

export default ItemList;
