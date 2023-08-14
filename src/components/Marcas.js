import React from 'react';
import { marcas1, marcas2, marcas3, marcas4, marcas5, marcas6, marcas7, marcas8, marcas9, marcas10, marcas11, marcas12 } from './images';
import CarouselComponent from './CarouselMarcas';
import './styles/Marcas.css'
import { marcasMap } from '../config';

const Marcas = () => {
    return (
        <div className="marcas">
            <div className="seccion-marcas">
                < CarouselComponent />
            </div>

            <div className="seccion2-marcas">
                <div className="grupomarcas">
                    {Object.keys(marcasMap).map((id) => {
                        const { name, icon } = marcasMap[id];
                        return (
                            <div className="marcas" key={id}>
                                <img className="zoom" src={icon} alt={name} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Marcas;
