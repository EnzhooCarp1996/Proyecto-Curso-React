import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <div>
          <Header/>

          <Routes>
            <Route path="/" element={<ItemListContainer titulo={"Bienvenidos"} />} />
            <Route path="/category/:category" element={<ItemListContainer titulo={"Bienvenidos"} />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
          
          <Footer/>
        </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
