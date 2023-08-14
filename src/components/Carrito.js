import React from 'react';
import './styles/Carrito.css';


const Carrito = ({ cartItems, removeCartItem }) => {
    console.log(cartItems);
    return (
        <div className='cartList'>
            {cartItems.map((itemConfig) => {
                return (
                    <div className='listItem'>
                        <img src={itemConfig.icon} alt={itemConfig.name} />
                        <p>{itemConfig.name} {itemConfig.cantidad}</p>
                        <button onClick={() => removeCartItem(itemConfig.id)}><i class="bi bi-x-lg"></i></button>
                    </div>
                );
            })}
        </div>
    );
};
export default Carrito;
