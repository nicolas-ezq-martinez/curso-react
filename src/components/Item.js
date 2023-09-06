import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import './styles/Perfumes.css'
import ItemContainer from './ItemContainer';
import { cartContext } from '../context/context'

const Item = () => {
    const { addCartItem, dbItems } = useContext(cartContext);
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
