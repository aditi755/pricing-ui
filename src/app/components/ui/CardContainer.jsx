import React from 'react';

const CardContainer = ({ children, className, style }) => {
  return (
    <div className={`bg-white h-[812px] w-[280px] shadow-md rounded-lg p-4 ${className}`} style={style}>
      {children}
    </div>
  );
};

export default CardContainer;
