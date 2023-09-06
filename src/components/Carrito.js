import React, { useContext } from 'react';
import './styles/Carrito.css';
import { cartContext } from '../context/context'


const getImg = (icon) => {
    let imgSrc;
    try {
        imgSrc = require(`./images${icon}.jpg`);
    } catch (e) {
        console.error('img', icon, 'not found');
    }
    return imgSrc;
};

const Carrito = () => {
    const { cartItems, totalPrice, removeCartItem, sendPurchase, updatePurchase } = useContext(cartContext);
    return (
        <>
            <span className='total'>{`Total: ${totalPrice}`}</span>
            <div className='cartList'>
                {cartItems.map((itemConfig) => {
                    return (
                        <div className='listItem'>
                            <img src={getImg(itemConfig.icon)} alt={itemConfig.name} />
                            <p>{itemConfig.name}
                                <span className='contador'>{`Cantidad: ${itemConfig.cantidad}`}</span>
                                <span className='precio'>{`Precio: ${itemConfig.price}`}</span>
                            </p>

                            <span className="borrar" onClick={() => removeCartItem(itemConfig.id)}><i className="bi bi-x-lg" style={{ fontSize: '2rem', color: '#ff0000' }} ></i></span>
                        </div>

                    );
                })}
            </div>
            <button className='cierre' onClick={sendPurchase}>{`Cierre de compra`}</button>
            {/* <button className='correccion' onClick={updatePurchase}>{`Correccion de compra`}</button> */}
        </>
    );
};

export default Carrito;
