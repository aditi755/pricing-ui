
import React from 'react';

const Button = ({ onClick, children, className, text, style }) => {
    return (
        <div className="flex justify-center items-center">
        <button 
            className={`w-[232px] h-[36px] text-center bg-blue-600 rounded-lg ${className}`} 
            onClick={onClick}
            style={style} 
        >
            {text}
        </button>
        </div>
    );
};

export default Button;
