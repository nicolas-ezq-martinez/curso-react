import React from 'react';

const Navbar = ({ setPageShown }) => {
    return (
        <div className="navbar-styles">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <a onClick={() => setPageShown(0)} className="bi bi-p-square-fill" style={{ fontSize: '2rem', color: 'black' }} />
                        <a className="navbar-brand" onClick={() => setPageShown(0)}>erfumo</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a onClick={() => setPageShown(1)} className="nav-link active" aria-current="page">Marcas</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => setPageShown(2)} className="nav-link active">Tratamiento</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={() => setPageShown(3)} className="nav-link active" aria-current="page">Registro</a>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
