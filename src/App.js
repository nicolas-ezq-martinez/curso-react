import React, { useState } from 'react';
import Root from './components/Root';
import ItemsList from './components/ItemsList';
import Marcas from './components/Marcas';
import Item from './components/Item';
import Registro from './components/Registro';
import { itemsMap, perfumesMap, tratamientosMap } from './config';
import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Carrito from './components/Carrito';



const itemLoader = ({ params: { itemId } }) => {
  return { itemId };
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const addCartItem = (id, quantity) => {
    const productoExistente = cartItems.find(item => item.id === id)
    if (productoExistente) {
      const nuevosItems = cartItems.map(item => {
        if (id === productoExistente.id) {
          return { ...item, cantidad: item.cantidad + quantity };
        }
        return item;
      });
      setCartItems(nuevosItems);
    } else {
      setCartItems([...cartItems, { ...itemsMap[id], cantidad: quantity }]);
    }
  }
  // const removeCartItem = (item) => setCartItems(cartItems.filter(cartItem => cartItem != item));

  const removeCartItem = (id) => {
    const nuevosItems = cartItems.filter(item => item.id !== id);
    setCartItems(nuevosItems);
  }
  // const addCartItem = (item) => setCartItems([...cartItems, item]);

  return <RouterProvider router={createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root cartItems={cartItems} />}>
        <Route path="/" element={<ItemsList map={perfumesMap} addCartItem={addCartItem} />} />
        <Route path="/categoria/marcas" element={<Marcas addCartItem={addCartItem} />} />
        <Route path="/categoria/tratamiento" element={<ItemsList map={tratamientosMap} addCartItem={addCartItem} />} />
        <Route path="/item/:itemId" loader={itemLoader} element={<Item addCartItem={addCartItem} />} />
        <Route path="/registro" element={<Registro addCartItem={addCartItem} />} />
        <Route path="/carrito" element={<Carrito cartItems={cartItems} addCartItem={addCartItem} removeCartItem={removeCartItem} />} />
      </Route>
    )
  )} />;
};

export default App;
