import { createContext, useState } from "react";
import useGetDocuments from '../hooks/useGetDocuments';
import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

export const cartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    //hooks
    const { document: dbItems } = useGetDocuments("perfumes");
    const { document: dbCompras } = useGetDocuments("compras");



    if (!dbItems) {
        return <div>loading...</div>;
    }

    const calculateTotalPrice = (items) => {
        let total = 0;
        items.forEach(item => {
            total += item.price * item.cantidad;
        });
        return total;
    };
    const calculateTotalProducts = (items) => {
        let total = 0;
        items.forEach(item => {
            total += item.cantidad;
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

    console.log(dbCompras)

    const sendPurchase = () => {
        const purchase = {
            quantity: calculateTotalProducts(cartItems),
            price: calculateTotalPrice(cartItems),
            products: cartItems.map(item => item.id).join(),
        }
        const db = getFirestore();

        const purchaseCollection = collection(db, "compras");
        addDoc(purchaseCollection, purchase).then((doc) => {
            console.log(doc);
            Swal.fire(
                'Compra Finalizada!',
                `Su monto total es de ${totalPrice}`,
                'success'
            )
        });

    }

    // const updatePurchase = () => {
    //     const db = getFirestore();
    //     const orderDoc = doc(db, "compras", doc.id);
    //     updateDoc(orderDoc, { price: calculateTotalPrice(cartItems), quantity: calculateTotalProducts(cartItems) }).then((doc) => console.log(doc));
    // }

    return (
        <cartContext.Provider
            value={{
                cartItems,
                totalPrice,
                addCartItem,
                removeCartItem,
                perfumes,
                tratamientos,
                dbItems,
                sendPurchase,
                // updatePurchase
            }}
        >
            {children}
        </cartContext.Provider>
    );
};
