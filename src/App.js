import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navegacion/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart";
import AddItemContainer from "./components/AddItemContainer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <div className="titulo"> La Tiendita </div>
            <NavBar />
          </header>
          <main>
            <div>
              <Routes>
                <Route
                  path="/"
                  element={
                    <ItemListContainer greeting="Hola! Bienvenido, y hoy, que tenes ganas de tomar?" />
                  }
                />
                <Route
                  exact
                  path="/category/:categoryName"
                  element={
                    <ItemListContainer
                      greeting={"Variedades con las que contamos"}
                    />
                  }
                />
                <Route
                  path="/producto/:itemId"
                  element={<ItemDetailContainer />}
                />
                <Route exact path="/item/add" element={<AddItemContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="*"
                  element={
                    <div>
                      <h2>Página no encontrada, retornar al Home</h2>
                    </div>
                  }
                />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
