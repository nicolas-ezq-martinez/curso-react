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
                        <p>{itemConfig.name}
                            <span className='contador'>{`Cantidad: ${itemConfig.cantidad}`}</span>
                            <span className='precio'>{`Precio: ${itemConfig.price}`}</span>
                        </p>

                        <span className="borrar" onClick={() => removeCartItem(itemConfig.id)}><i className="bi bi-x-lg" style={{ fontSize: '2rem', color: '#ff0000' }} ></i></span>
                    </div>
                );
            })}
        </div>
    );
};
export default Carrito;
