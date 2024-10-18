import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from './Button';
const Card = ({ children, className, style, title, paragraph, items, label, spanTime, highlightIndex, highlightFirstItem, showPrice, discount, price, info, grayBullets }) => {
  return (
    <div 
      className={`bg-white h-[812px] w-[280px] shadow-md rounded-lg p-4 ${className}`} 
      style={style}
    >
        
      <p className="">{label}</p>

      <div className="flex">
      <h2 className="mt-3 text-3xl font-extrabold">{title}</h2>
      <p className="mt-6 ml-2">{spanTime}</p>
      </div>

      {showPrice && (
        <div className="flex flex-row gap-2 mt-2">
          <span className="bg-green-300 text-green-700  rounded-lg w-20 text-center">{discount}</span>
          <p className="text-gray-500 text-xl font-extrabold line-through">{price}</p>
        </div>
      )}

      <p className="mt-1 text-sm">{paragraph}</p>

      <ul className="mt-10 list-none h-[412px] "> 
        {items.map((item, index) => (
        <div className="flex flex-row mt-5 " key={index}> 
          <IoIosCheckmarkCircle className={`mr-2 ${highlightFirstItem && index === 0 ? 'text-blue-500' : ''}`} />
          <li className={grayBullets ? "text-gray-500" : ""}>
            <div className={`${highlightFirstItem && index === 0 ? 'text-blue-500' : ''}`}>{item}</div> 
          </li>
        </div>
        ))}
      </ul>
        
        <div className="border-t-[1px] h-[112px] border-solid border-blue-400" style={{ borderColor: 'var(--blue-400, #76A9FA)' }}>
          <ul className="list-disc pl-5 gap-5 mt-6">
            {info.map((ele, index) => (
              <li className={`mb-2 ${grayBullets ? "text-gray-500" : "" }`} key={index} >{ele}</li>
            ))}
          </ul>
      </div>
    
      {children}
    </div>
  )
}

export default Card
