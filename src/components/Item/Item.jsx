import "./Item.css";

export const Item = ({ name, price, description, imageUrl, children }) => {

    return (
        <article>
            <img src={imageUrl} alt={description} />
            <h2 className="product-tittle">{name}</h2>
            <p>Precio: ${price}</p>
            <p>Descripcion: {description}</p>
            {children}
        </article>
    );
    
}

export default Item;