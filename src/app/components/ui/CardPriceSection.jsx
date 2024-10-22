import React from 'react';

const CardPriceSection = ({ showPrice, discount, price, highlightPrice }) => {
  if (!showPrice) return null;

  return (
    <div className="flex flex-row gap-2 mt-2">
      <span className="text-green-700 rounded-lg text-center w-[76px] h-[22px] font-medium"
        style={{ backgroundColor: '#ECFDF3' }}>
        {discount}
      </span>
      <p className={`text-xl font-extrabold line-through ${highlightPrice ? 'text-white' : 'text-gray-500'}`}>
        {price}
      </p>
    </div>
  );
};

export default CardPriceSection;
