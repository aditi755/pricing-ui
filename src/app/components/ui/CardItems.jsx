import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io";

const CardItems = ({ items, highlightFirstItem, grayBullets }) => {
  return (
    <ul className="mt-8 list-none h-[412px]">
      {items.map((item, index) => (
        <div className="flex flex-row mt-5" key={index}>
          <IoIosCheckmarkCircle className={`mr-2 ${highlightFirstItem && index === 0 ? 'text-blue-700' : ''}`} />
          <li className={grayBullets ? "text-gray-500" : ""}>
            <div className={`${highlightFirstItem && index === 0 ? 'text-blue-700 font-bold' : ''}`}>
              {item}
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default CardItems;
