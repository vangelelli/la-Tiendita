
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navegacion/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './context/CartContext'
import Cart from './components/Cart';
import AddItemContainer from './components/AddItemContainer';

function App() {     // es un componente contenderor y tiene una logica

  return (
    <CartContextProvider>
     <BrowserRouter>
       <div className="App">
         { /* el header va a quedar fijo*/}
         <header>
            <div className='titulo'> La Tiendita </div>
            <NavBar  />
         </header>
         <main>
            <div>
              <Routes>
                 { /* Esta es la pantalla del home y mostramos los componenetes del ItemLIstContainer*/}
                 <Route
                  path="/" 
                  element={ <ItemListContainer greeting="Hola! Bienvenido, y hoy, que tenes ganas de tomar?" />}
                 /> 
                 { /*Esta pantalla muestra el listado de los items filtrados por categoria*/}
                 <Route
                   path="/category/:categoryName"
                   element= { <ItemListContainer greeting={"Variedades con las que contamos"}/>}
                 />
                 { /*Esta es la pantalla de cada uno de los productos*/}
                 <Route
                   path="/producto/:itemId"
                   element={<ItemDetailContainer />}
                 />
                 { /*Esta es la pantalla para agregar productos */}
                 <Route
                   exact
                   path="/item/add"
                   element={<AddItemContainer />}
                 />

                  <Route path="/cart" element={<Cart />} 
                  />

                 { /*simularia una pagina 404 no encontrada*/}
                 <Route 
                   path="*"
                   element= {
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
