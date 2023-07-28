import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { itemsMap } from '../config';
import './styles/Perfumes.css'

const Item = ({ addCartItem }) => {
    const { itemId } = useLoaderData();
    const itemConfig = itemsMap[itemId];
    return (
        <div className="perfumes">
            <div className="container">
                <div className="articulos"><img src={itemConfig.icon} alt={itemConfig.name} /></div>
                <div className="nombre-perfume" title={itemConfig.name}>{itemConfig.name}</div>
                <button className="compra" onClick={() => addCartItem(itemConfig.name)}>Agregar al carro</button>
            </div>
        </div>
    );
};

export default Item;
