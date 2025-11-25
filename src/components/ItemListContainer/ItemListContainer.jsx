import { getProducts } from "../../services/products";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

useEffect(() => {
  if (category) {
    getProducts(category)
      .then((data) => setProducts(data))
      .catch(console.log);
  } else {
    getProducts()
      .then((data) => setProducts(data))
      .catch(console.log);
  }
}, [category]);


  return (
    <section>
      <h1>{titulo}</h1>
      <ItemList lista={products} />
    </section>
  );
};
