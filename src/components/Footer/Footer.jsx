import React from 'react';
import icon from '../../assets/img/icon.png'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="container-footer">
            <div className="container-lets">
                <h2>LetsInove Web Solutions</h2>
            </div>
            <div className="container-flex">
                <div className="container-icon">
                    <img className='icon-footer' src={icon} alt="icone"></img>
                </div>
                <div className="container-info">
                    <h3>Contatos</h3>
                    <p>suporte@letsinove.com</p>
                    <p>(45) 99958-7883</p>
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright© 2023 LetsInove. Todos os direitos reservados.</p>
            </div>
        </div>
    );
}

export default Footer;