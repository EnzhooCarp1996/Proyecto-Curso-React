import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header/>

          <Routes>
            <Route
              path="/"
              element={<ItemListContainer titulo={"Bienvenidos"} />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
          </Routes>
          
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
