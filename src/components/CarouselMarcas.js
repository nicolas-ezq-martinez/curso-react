import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const getImg = (icon) => {
    let imgSrc;
    try {
        imgSrc = require(`./images${icon}.jpg`);
    } catch (e) {
        console.error('img', icon, 'not found');
    }
    return imgSrc;
};

const CarouselComponent = ({ dbMarcas }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);

    };

    return (
        <Carousel slide={false} indicators={false} activeIndex={index} onSelect={handleSelect} variant={"dark"}>
            {dbMarcas.map((marca) => {
                const { icon } = marca;
                return (
                    <Carousel.Item>
                        <div className="text-center">
                            <img className="d-block mx-auto w-75" src={getImg(icon)} alt="" />
                        </div>
                    </Carousel.Item>
                )
            })
            }
        </Carousel>
    );
};

export default CarouselComponent;
