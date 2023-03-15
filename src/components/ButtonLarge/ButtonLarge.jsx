import React from 'react';
import './buttonLarge.css';

const ButtonLarge = ({ click, text }) => {
    return (
        <div className="content" onClick={click}>
            <p className="text">{text}</p>
        </div>
    )
}
export default ButtonLarge;