import React, { useState, useEffect} from 'react';

import burgerMenu from '../../assets/img/burger_icon.png';
import Button from '../Button/button';
import icon from '../../assets/img/icon.png';
import './menu.css'

const Menu = ({ inicio, cme, beneficio, etapa, beneficio2 }) => {

    function fechamenu () {
        document.getElementById('closeButton').click();
    }

    function abreLink(){
        window.open('https://wa.me/5545999587883');
    }

    function queroSite(){
        fechamenu();
        abreLink();
    }

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
                        <Button click={()=>abreLink()} text='Quero meu site'></Button>
                    </nav>
                </ul>
            )}
            {!isDesktop && (
                <div>
                    <img className="buttonImg" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" src={burgerMenu} alt="burger-menu"></img>
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">LetsInove Web Solutions</h5>
                            <button id='closeButton' type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className='container2'>
                                <nav className='nav2'>
                                    <a onClick={()=> fechamenu()} href={inicio}>Inicio</a>
                                    <a onClick={()=> fechamenu()} href={cme}>Pra você</a>
                                    <a onClick={()=> fechamenu()} href={beneficio2}>Benefícios</a>
                                    <a onClick={()=> fechamenu()} href={etapa}>Etapas</a>
                                    <Button click={()=>queroSite()} text='Quero meu site'></Button>
                                </nav>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Menu;