import React from 'react';
import './Button.css';

const Button = ({ click, text }) => {
    return (
        <div className="content" onClick={click}>
            <p className="text">{text}</p>
        </div>
    )
}
export default Button;