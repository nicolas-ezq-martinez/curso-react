import React from 'react';
import './styles/Perfumes.css'
import ItemContainer from './ItemContainer';

const ItemsList = ({ addCartItem, items }) => (
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

export default ItemsList 
