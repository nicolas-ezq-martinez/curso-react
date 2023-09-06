import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { Outlet } from 'react-router-dom';
import { cartContext } from '../context/context'

const Root = () => {
    const { cartItems } = useContext(cartContext);
    return (
        <div className="root">
            <Navbar cartItems={cartItems} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
