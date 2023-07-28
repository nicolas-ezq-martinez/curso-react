import React, { useState } from 'react';
import Root from './components/Root';
import Perfumo from './components/Perfumo';
import Marcas from './components/Marcas';
import Tratamientos from './components/Tratamientos';
import Item from './components/Item';
import Registro from './components/Registro';
import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
// import Carrito from './components/Carrito';

const itemLoader = ({ params: { itemId } }) => {
  return { itemId };
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const addCartItem = (item) => setCartItems([...cartItems, item]);
  // const removeCartItem = (item) => setCartItems(cartItems.filter(cartItem => cartItem != item));

  return <RouterProvider router={createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root cartItems={cartItems} />}>
        <Route path="/" element={<Perfumo addCartItem={addCartItem} />} />
        <Route path="/categoria/marcas" element={<Marcas addCartItem={addCartItem} />} />
        <Route path="/categoria/tratamiento" element={<Tratamientos addCartItem={addCartItem} />} />
        <Route path="/item/:itemId" loader={itemLoader} element={<Item addCartItem={addCartItem} />} />
        <Route path="/registro" element={<Registro addCartItem={addCartItem} />} />
      </Route>
    )
  )} />;
};

export default App;
