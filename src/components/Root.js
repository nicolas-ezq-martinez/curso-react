import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { Outlet } from 'react-router-dom';


const Root = ({ cartItems }) => {
    return (
        <div className="root">
            <Navbar cartItems={cartItems} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
