import React, { useContext } from 'react';
import './styles/Perfumes.css'
import ItemContainer from './ItemContainer';
import { cartContext } from '../context/context.js';

const ItemsList = ({ items }) => {
    const { addCartItem } = useContext(cartContext);
    return (
        <div className="perfumes">
            {items.map(item => (
                <ItemContainer
                    key={item.id}
                    addCartItem={addCartItem}
                    {...item}
                />
            ))}
        </div>
    );
};

export default ItemsList 
