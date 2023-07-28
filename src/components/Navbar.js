import React from 'react';
import './styles/Navbar.css';
import { useNavigate } from 'react-router-dom';


const Navbar = ({ cartItems }) => {
    const navigate = useNavigate();

    return (
        <div className="navbar-styles">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <a onClick={() => navigate('/')} className="bi bi-p-square-fill pointer" style={{ fontSize: '2rem', color: 'black' }} />
                        <a className="navbar-brand pointer" onClick={() => navigate('/')}>erfumo</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item pointer">
                                <a onClick={() => navigate('/categoria/marcas')} className="nav-link active" aria-current="page">Marcas</a>
                            </li>
                            <li className="nav-item pointer">
                                <a onClick={() => navigate('/categoria/tratamiento')} className="nav-link active">Tratamiento</a>
                            </li>
                            <li className="nav-item pointer">
                                <a onClick={() => navigate('/registro')} className="nav-link active" aria-current="page">Registro</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                        <button className="nav-link active cart-container" aria-current="page">
                            <i className="bi bi-cart" />
                            <span className="cart-counter">{cartItems.length}</span>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
