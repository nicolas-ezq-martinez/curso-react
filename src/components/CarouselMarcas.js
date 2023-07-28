import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { marcas1, marcas2, marcas3, marcas4, marcas5, marcas6, marcas7, marcas8, marcas9, marcas10, marcas11, marcas12 } from './images';


const CarouselComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel slide={false} indicators={false} activeIndex={index} onSelect={handleSelect} variant={"dark"}>
            <Carousel.Item>
                <div className="text-center">
                    <img className="d-block mx-auto w-75" src={marcas1} alt="" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="text-center">
                    <img className="d-block mx-auto w-75" src={marcas2} alt="" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="text-center">
                    <img className="d-block mx-auto w-75" src={marcas3} alt="" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="text-center">
                    <img className="d-block mx-auto w-75" src={marcas4} alt="" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="text-center">
                    <img className="d-block mx-auto w-75" src={marcas5} alt="" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="text-center">
                    <img className="d-block mx-auto w-75" src={marcas6} alt="" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="text-center">
                    <img className="d-block mx-auto w-75" src={marcas7} alt="" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="text-center">
                    <img className="d-block mx-auto w-75" src={marcas8} alt="" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="text-center">
                    <img className="d-block mx-auto w-75" src={marcas9} alt="" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="text-center">
                    <img className="d-block mx-auto w-75" src={marcas10} alt="" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="text-center">
                    <img className="d-block mx-auto w-75" src={marcas11} alt="" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="text-center">
                    <img className="d-block mx-auto w-75" src={marcas12} alt="" />
                </div>
            </Carousel.Item>
            {/* Agrega más items según la cantidad de imágenes que quieras mostrar */}
        </Carousel>
    );
};

export default CarouselComponent;
