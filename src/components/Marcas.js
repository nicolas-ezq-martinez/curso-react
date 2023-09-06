import React from 'react';
import CarouselComponent from './CarouselMarcas';
import './styles/Marcas.css'
import useGetDocuments from '../hooks/useGetDocuments';



const getImg = (icon) => {
    let imgSrc;
    try {
        imgSrc = require(`./images${icon}.jpg`);
    } catch (e) {
        console.error('img', icon, 'not found');
    }
    return imgSrc;
};


const Marcas = () => {
    const { document: dbMarcas } = useGetDocuments("marcas");
    return (
        <div className="marcas">
            <div className="seccion-marcas">
                < CarouselComponent dbMarcas={dbMarcas} />
            </div>

            <div className="seccion2-marcas">
                <div className="grupomarcas">
                    {dbMarcas?.map((marca) => {
                        const { name, icon } = marca;
                        return (
                            <div className="marcas" key={name}>
                                <img className="zoom" src={getImg(icon)} alt={name} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Marcas;
