import React, { useContext } from 'react';
import Root from './components/Root';
import ItemsList from './components/ItemsList';
import Marcas from './components/Marcas';
import Item from './components/Item';
import Registro from './components/Registro';
import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Carrito from './components/Carrito';
import { cartContext } from './context/context'

const itemLoader = ({ params: { itemId } }) => {
  return { itemId };
};

const App = () => {
  const { cartItems, perfumes, tratamientos } = useContext(cartContext);
  console.log(perfumes);
  return <RouterProvider router={createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root cartItems={cartItems} />}>
        <Route path="/" element={<ItemsList items={perfumes} />} />
        <Route path="/categoria/marcas" element={<Marcas />} />
        <Route path="/categoria/tratamiento" element={<ItemsList items={tratamientos} />} />
        <Route path="/item/:itemId" loader={itemLoader} element={<Item />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/carrito" element={<Carrito />} />
      </Route>
    )
  )} />;
};

export default App;
