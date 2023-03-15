import React, { useState, useEffect, useRef } from 'react';

import burgerMenu from '../../assets/img/burger_icon.png';
import Button from '../Button/button';
import icon from '../../assets/img/icon.png';
import './menu.css'

const Menu = ({ inicio, cme, beneficio, etapa, beneficio2 }) => {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1024);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    
    return (
        <div className='menuResponse'>
            <img src={icon} alt='logo'></img>
            {isDesktop && (
                <ul className='container1'>
                    <nav className='nav1'>
                        <a href={inicio}>Inicio</a>
                        <a href={cme}>Pra você</a>
                        <a href={beneficio}>Benefícios</a>
                        <a href={etapa}>Etapas</a>
                        <Button text='Quero meu site'></Button>
                    </nav>
                </ul>
            )}
            {!isDesktop && (
                <div>
                    <img className="buttonImg" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" src={burgerMenu} alt="burger-menu"></img>
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">LetsInove Web Solutions</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className='container2'>
                                <nav className='nav2'>
                                    <a href={inicio}>Inicio</a>
                                    <a href={cme}>Pra você</a>
                                    <a href={beneficio2}>Benefícios</a>
                                    <a href={etapa}>Etapas</a>  
                                </nav>
                                <Button text='Quero meu Orçamento!'></Button>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Menu;