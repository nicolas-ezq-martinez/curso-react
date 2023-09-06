import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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

const ItemContainer = ({ id, name, icon, price }) => {
    const { addCartItem } = useContext(cartContext);

    const navigate = useNavigate();
    const [currentQuantity, setCurrentQuantity] = useState(1);
    const plusQuantity = () => {
        setCurrentQuantity(currentQuantity + 1);
    };
    const minusQuantity = () => {
        setCurrentQuantity(Math.max(1, currentQuantity - 1));
    };

    return (
        <div className="container" key={id}>
            <div onClick={() => navigate(`/item/${id}`)} className="articulos">
                <img src={getImg(icon)} alt={name} />
            </div>
            <div onClick={() => navigate(`/item/${id}`)} className="nombre-perfume" title={name}>{name}</div>
            <div className='precio' title={price}>{price}</div>
            <div className='buy'>
                <button className="compra" onClick={() => addCartItem(id, currentQuantity)}>Agregar al carro</button>
                <button onClick={minusQuantity} className="minus"><i className="bi bi-file-minus-fill"></i></button>
                <span className='quantity'>{currentQuantity}</span>
                <button onClick={plusQuantity} className="plus"><i className="bi bi-file-plus-fill"></i></button>
            </div>
        </div>
    );
};

export default ItemContainer;
