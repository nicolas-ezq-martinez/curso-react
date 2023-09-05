import React, { useState } from 'react';
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
import useGetDocuments from './hooks/useGetDocuments';




const itemLoader = ({ params: { itemId } }) => {
  return { itemId };
};




const App = () => {

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  //hooks
  const { document: dbItems } = useGetDocuments("perfumes");
  const { document: dbMarcas } = useGetDocuments("marcas");

  if (!dbItems) {
    return <div>loading...</div>;
  }

  console.log(dbItems);


  const calculateTotalPrice = (items) => {
    let total = 0;
    items.forEach(item => {
      total += item.price * item.cantidad;
    });
    return total;
  };

  const addCartItem = (id, quantity) => {
    const productoExistente = cartItems.find(item => item.id === id)
    let newCartItems = cartItems;
    if (productoExistente) {
      newCartItems = cartItems.map(item => {
        if (id === item.id) {
          return { ...item, cantidad: item.cantidad + quantity };
        }
        return item;
      });
    } else {
      const item = dbItems.find(item => item.id === id);
      newCartItems = [...cartItems, { ...item, cantidad: quantity }];
    }
    const updatedTotalPrice = calculateTotalPrice(newCartItems);
    setCartItems(newCartItems);
    setTotalPrice(updatedTotalPrice);
  }


  const removeCartItem = (id) => {
    const newCartItems = cartItems.filter(item => item.id !== id);
    const updatedTotalPrice = calculateTotalPrice(newCartItems);
    setCartItems(newCartItems);
    setTotalPrice(updatedTotalPrice);
  }

  const tratamientos = dbItems.filter(item => item.treatment)
  const perfumes = dbItems.filter(item => !item.treatment)

  return <RouterProvider router={createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root cartItems={cartItems} />}>
        <Route path="/" element={<ItemsList items={perfumes} addCartItem={addCartItem} />} />
        <Route path="/categoria/marcas" element={<Marcas dbMarcas={dbMarcas} addCartItem={addCartItem} />} />
        <Route path="/categoria/tratamiento" element={<ItemsList items={tratamientos} addCartItem={addCartItem} />} />
        <Route path="/item/:itemId" loader={itemLoader} element={<Item dbItems={dbItems} addCartItem={addCartItem} />} />
        <Route path="/registro" element={<Registro addCartItem={addCartItem} />} />
        <Route path="/carrito" element={<Carrito cartItems={cartItems} dbItems={dbItems} addCartItem={addCartItem} removeCartItem={removeCartItem} totalPrice={totalPrice} />} />
      </Route>
    )
  )} />;
};



export default App;
