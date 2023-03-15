import React from 'react';
import './button.css';

const Button = ({ click, text }) => {
    return (
        <div className="button" onClick={click}>
            <p className="texts">{text}</p>
        </div>
    )
}
export default Button;