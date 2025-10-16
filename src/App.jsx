import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext/CartProvider";

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <div>
          <Header/>

          <Routes>
            <Route path="/" element={<ItemListContainer titulo={"Bienvenidos"} />} />
            <Route path="/carrito" element={<ItemListContainer titulo={"Carrito"} />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
          </Routes>
          
          <Footer/>
        </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
