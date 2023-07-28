import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';


const Root = ({ cartItems }) => {
    return (
        <div className="root">
            <Navbar cartItems={cartItems} />
            <Outlet />
        </div>
    );
};

export default Root;
