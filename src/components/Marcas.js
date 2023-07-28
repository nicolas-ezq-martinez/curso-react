import React from 'react';
import { marcas1, marcas2, marcas3, marcas4, marcas5, marcas6, marcas7, marcas8, marcas9, marcas10, marcas11, marcas12 } from './images';
import CarouselComponent from './CarouselMarcas';
import './styles/Marcas.css'

const Marcas = () => {
    return (
        <div className="marcas">
            <div className="seccion-marcas">
                < CarouselComponent />
            </div>

            <div className="seccion2-marcas">
                <div className="grupomarcas">
                    <div className="marcas"><img className="zoom" src={marcas1} alt="" /></div>
                    <div className="marcas"><img className="zoom" src={marcas2} alt="" /></div>
                    <div className="marcas"><img className="zoom" src={marcas3} alt="" /></div>
                    <div className="marcas"><img className="zoom" src={marcas4} alt="" /></div>
                    <div className="marcas"><img className="zoom" src={marcas5} alt="" /></div>
                    <div className="marcas"><img className="zoom" src={marcas6} alt="" /></div>
                    <div className="marcas"><img className="zoom" src={marcas7} alt="" /></div>
                    <div className="marcas"><img className="zoom" src={marcas8} alt="" /></div>
                    <div className="marcas"><img className="zoom" src={marcas9} alt="" /></div>
                    <div className="marcas"><img className="zoom" src={marcas10} alt="" /></div>
                    <div className="marcas"><img className="zoom" src={marcas11} alt="" /></div>
                    <div className="marcas"><img className="zoom" src={marcas12} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Marcas;
