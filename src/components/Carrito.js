import React from 'react';
import './styles/Carrito.css';
import Swal from 'sweetalert2';


const Carrito = ({ cartItems, removeCartItem, totalPrice }) => {
    console.log(cartItems);
    return (
        <>
            <span className='total'>{`Total: ${totalPrice}`}</span>
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
            <button className='cierre' onClick={() => {
                Swal.fire(
                    'Compra Finalizada!',
                    `Su monto total es de ${totalPrice}`,
                    'success'
                )
            }}>{`Cierre de compra`}</button>

        </>
    );
};

export default Carrito;
