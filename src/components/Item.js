import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './styles/Perfumes.css'
import ItemContainer from './ItemContainer';

const Item = ({ addCartItem, dbItems }) => {
    const { itemId } = useLoaderData();
    const itemConfig = dbItems.find(item => item.id === itemId);;
    return (
        <div className="perfumes">
            <ItemContainer
                addCartItem={addCartItem}
                {...itemConfig}
            />
        </div>
    );
};

export default Item;
