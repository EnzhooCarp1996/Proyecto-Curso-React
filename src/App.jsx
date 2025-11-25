import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { CartProvider } from "./context/CartContext/CartProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminLayout } from "./layouts/AdminLayout";
import { MainLayout } from "./layouts/MainLayout";
import { Login } from "./components/Login/Login";
import { Cart } from "./components/Cart/Cart";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div>

            <Routes>
              <Route element={<MainLayout />}>
                <Route
                  path="/"
                  element={<ItemListContainer titulo={"Bienvenidos"} />}
                />
                <Route
                  path="/category/:category"
                  element={<ItemListContainer titulo={"Bienvenidos"} />}
                />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Cart />} />
              </Route>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Login />} />

                <Route
                  path="alta-productos"
                  element={
                    <RutaProtegida>
                      <ProductFormContainer />
                    </RutaProtegida>
                  }
                />
              </Route>
              {/* <Route path="/admin" element={<ProductFormContainer />} /> */}
            </Routes>

          </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
