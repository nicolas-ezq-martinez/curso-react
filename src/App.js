import React, { useState, useEffect } from 'react';
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


//Ejemplo curso

//import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

//  // Devuelve un estudiante por id
//  useEffect(() => {
//   const db = getFirestore();

//   const studentRef = doc(db, "students", "ykIuZpMwNiziXZvgXgR4");
//   getDoc(studentRef).then((snapshot) => {
//     if (snapshot.exists()) {
//       const data = snapshot.data();
//       // const estudiante = {
//       //   id: snapshot.id,
//       //   ...data,
//       // };
//       const estudiante = {
//         id: snapshot.id,
//         firstName: data.firstName,
//         lastName: data.lastName
//       };

//       setStudent(estudiante);
//     }
//   })

// }, []);

// // Devolver todos los estudiantes
// useEffect(() => {
//   const db = getFirestore();

//   const studentCollection = collection(db, "students");
//   const conditionEdad = where("age", "<", 25);
//   const conditionNombre = where("lastName", "==", "Dahl");

//   const q = query(studentCollection, conditionNombre);

//   getDocs(q).then((snapshot) => {
//     console.log("entra al then");
//     if (snapshot.size > 0) {
//       const estudiantes = snapshot.docs.map((doc) => {
//         return {
//           id: doc.id,
//           ...doc.data(),
//         }
//       });
//       console.log(estudiantes);
//       setStudents(estudiantes);
//     }
//   })

// }, []);

// if (!student) {
//   return <div>loading...</div>;
// }

// return (
//   <div className="App">
//     {student.firstName} {student.lastName}

//     <div>Cantidad de estudiantes: {students.length}</div>
//   </div>
// );


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = (items) => {
    let total = 0;
    for (const item of items) {
      total += item.price * item.cantidad;
    }
    return total;
  };

  const addCartItem = (id, quantity) => {
    const productoExistente = cartItems.find(item => item.id === id)
    if (productoExistente) {
      const nuevosItems = cartItems.map(item => {
        if (id === item.id) {
          return { ...item, cantidad: item.cantidad + quantity };
        }
        return item;
      });
      setCartItems(nuevosItems);
    } else {
      setCartItems([...cartItems, { ...itemsMap[id], cantidad: quantity }]);
    }
    const updatedTotalPrice = calculateTotalPrice([...cartItems, { ...itemsMap[id], cantidad: quantity }]);
    setTotalPrice(updatedTotalPrice);
  }


  const removeCartItem = (id) => {
    const nuevosItems = cartItems.filter(item => item.id !== id);
    setCartItems(nuevosItems);
    const updatedTotalPrice = calculateTotalPrice(cartItems.filter(item => item.id !== id));
    setTotalPrice(updatedTotalPrice);
  }


  return <RouterProvider router={createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root cartItems={cartItems} />}>
        <Route path="/" element={<ItemsList map={perfumesMap} addCartItem={addCartItem} />} />
        <Route path="/categoria/marcas" element={<Marcas addCartItem={addCartItem} />} />
        <Route path="/categoria/tratamiento" element={<ItemsList map={tratamientosMap} addCartItem={addCartItem} />} />
        <Route path="/item/:itemId" loader={itemLoader} element={<Item addCartItem={addCartItem} />} />
        <Route path="/registro" element={<Registro addCartItem={addCartItem} />} />
        <Route path="/carrito" element={<Carrito cartItems={cartItems} addCartItem={addCartItem} removeCartItem={removeCartItem} totalPrice={totalPrice} />} />
      </Route>
    )
  )} />;
};



export default App;
