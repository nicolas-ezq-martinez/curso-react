import React from 'react';
import { perfume1, perfume2, perfume3, perfume4, perfume5, perfume6 } from './images';
import { useNavigate } from 'react-router-dom';
import './styles/Perfumes.css'

const Perfumo = ({ addCartItem }) => {
    const navigate = useNavigate();

    return (
        <div className="perfumes">
            <div className="container">
                <div onClick={() => navigate('/item/perfume1')} className="articulos"><img src={perfume1} alt="CAROLINA | HERRERA 212 HEROES FOR HER EDP" /></div>
                <div onClick={() => navigate('/item/perfume1')} className="nombre-perfume" title="CAROLINA | HERRERA 212 HEROES FOR HER EDP">CAROLINA | HERRERA 212 HEROES FOR HER EDP</div>
                <button className="compra" onClick={() => addCartItem('CAROLINA | HERRERA 212 HEROES FOR HER EDP')}>Agregar al carro</button></div>

            <div className="container">
                <div onClick={() => navigate('/item/perfume2')} className="articulos"><img src={perfume2} alt="HALLOWEN | HALLOWEN EDT" /></div>
                <div onClick={() => navigate('/item/perfume2')} className="nombre-perfume" title="HALLOWEN | HALLOWEN EDT">HALLOWEN | HALLOWEN EDT</div>
                <button className="compra" onClick={() => addCartItem('HALLOWEN | HALLOWEN EDT')}>Agregar al carro</button></div>

            <div className="container">
                <div onClick={() => navigate('/item/perfume3')} className="articulos"><img src={perfume3} alt="PACO RABANNE | INVICTUS PLATINUM END" /></div>
                <div onClick={() => navigate('/item/perfume3')} className="nombre-perfume" title="PACO RABANNE | INVICTUS PLATINUM END">PACO RABANNE | INVICTUS PLATINUM END</div>
                <button className="compra" onClick={() => addCartItem('PACO RABANNE | INVICTUS PLATINUM END')}>Agregar al carro</button></div>

            <div className="container">
                <div onClick={() => navigate('/item/perfume4')} className="articulos"><img src={perfume4} alt="DIOR | JADORE EDP" /></div>
                <div onClick={() => navigate('/item/perfume4')} className="nombre-perfume" title="DIOR | JADORE EDP">DIOR | JADORE EDP</div>
                <button className="compra" onClick={() => addCartItem('DIOR | JADORE EDP')}>Agregar al carro</button></div>

            <div className="container">
                <div onClick={() => navigate('/item/perfume5')} className="articulos"><img src={perfume5} alt="ARMANI | MY WAY EDP REFILLIABLE" /></div>
                <div onClick={() => navigate('/item/perfume5')} className="nombre-perfume" title="ARMANI | MY WAY EDP REFILLIABLE">ARMANI | MY WAY EDP REFILLIABLE</div>
                <button className="compra" onClick={() => addCartItem('ARMANI | MY WAY EDP REFILLIABLE')}>Agregar al carro</button></div>

            <div className="container">
                <div onClick={() => navigate('/item/perfume6')} className="articulos"><img src={perfume6} alt="CALVIN KLEIN | CK ONE EDT" /></div>
                <div onClick={() => navigate('/item/perfume6')} className="nombre-perfume" title="CALVIN KLEIN | CK ONE EDT">CALVIN KLEIN | CK ONE EDT</div>
                <button className="compra" onClick={() => addCartItem('CALVIN KLEIN | CK ONE EDT')}>Agregar al carro</button></div>
        </div>
    );
};


export default Perfumo;
