import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const exists = (id) => {
    const exist = cart.some((p) => p.id === id);
    return exist;
  };


  //Agregamos map y spread
  const addItem = (item) => {
    if (exists(item.id)) {
      //map, cuido mutacion a nivel del array
      const updateCart = cart.map((prod) => {
        if (prod.id === item.id) {
          //cuido mutacion a nivel de objeto
          return { ...prod, quantity: prod.quantity + item.quantity };
        } else {
          return prod;
        }
      });
      setCart(updateCart);
      alert("Agregado al carrito");
    } else {
      setCart([...cart, item]);
      alert(`${item.name} agregado`);
    }
  };

  //Eliminar el producto con filter
  const deleteItem = (id) => {
    const filtered = cart.filter((p) => p.id !== id);
    setCart(filtered);
    alert("Producto eliminado");
  }

  //Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  //Carlcular total de items en el carrito
  const getTotalItems = () => {
    const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
    return totalItems;
  };

  //Calcular total
  const total = () => {
    const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
    
    return Math.round(total * 100) / 100;
  }

  const checkout = () => {
    const ok = confirm("¿Seguro quue quiere realizar la compra?");

    if(ok){
      alert("¡Compra realizada con exito!");
      clearCart();
    }
  }
  console.log(cart);
  const value = { cart, addItem, deleteItem, clearCart, getTotalItems, total, checkout };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
