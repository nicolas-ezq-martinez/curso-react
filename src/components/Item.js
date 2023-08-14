import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { itemsMap } from '../config';
import './styles/Perfumes.css'
import ItemContainer from './ItemContainer';

const Item = ({ addCartItem }) => {
    const { itemId } = useLoaderData();
    const itemConfig = itemsMap[itemId];
    return (
        <div className="perfumes">
            <ItemContainer
                key={itemId}
                addCartItem={addCartItem}
                id={itemId}
                {...itemConfig}
            />
        </div>
    );
};

export default Item;
