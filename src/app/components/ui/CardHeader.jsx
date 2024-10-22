import React from 'react';

const CardHeader = ({ label, title, spanTime }) => {
  return (
    <div>
      <p>{label}</p>
      <div className="flex">
        <h2 className="mt-3 text-3xl font-extrabold">{title}</h2>
        <p className="mt-6 ml-2">{spanTime}</p>
      </div>
    </div>
  );
};

export default CardHeader;
