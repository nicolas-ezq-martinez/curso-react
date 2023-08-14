import React from 'react';
import './styles/Perfumes.css'
import ItemContainer from './ItemContainer';

const ItemsList = ({ addCartItem, map }) => (
    <div className="perfumes">
        {Object.keys(map).map((id) => (
            <ItemContainer
                key={id}
                addCartItem={addCartItem}
                id={id}
                {...map[id]}
            />
        ))}
    </div>
);

export default ItemsList 
