import React from 'react';
import { IoIosCheckmarkCircle } from "react-icons/io"; 
import Button from './Button'; 

// Accepts multiple props to render different parts of the card dynamically
const Card = ({ 
  children, className, style, title, paragraph,items,label, spanTime, highlightIndex, highlightFirstItem, showPrice, discount, price, info, grayBullets, highlightPrice 
}) => {
  return (
    <div 
      className={`bg-white h-[812px] w-[280px] shadow-md rounded-lg p-4 ${className}`} // Applying card styles and optional custom class
      style={style} // Applying optional inline styles
    >
        
      <p className="">{label}</p> {/* Label at the top of the card */}

      <div className="flex"> {/* Title and spanTime side by side */}
        <h2 className="mt-3 text-3xl font-extrabold">{title}</h2> {/* Main title */}
        <p className="mt-6 ml-2">{spanTime}</p> {/* Time or additional info */}
      </div>

      {/* Conditionally render the price section if showPrice is true */}
      {showPrice && (
        <div className="flex flex-row gap-2 mt-2"> {/* Discount and original price */}
          <span 
  className="text-green-700 rounded-lg text-center w-[76px] h-[22px] font-medium"
  style={{ backgroundColor: 'var(--Component-Colors-Utility-Success-50, #ECFDF3)' }}
>
  {discount}
</span> {/* Discount label */}
          <p className={`text-xl font-extrabold line-through ${highlightPrice ? 'text-white' : 'text-gray-500'}`}>{price}</p> {/* Original price with strikethrough */}
        </div>
      )}

      <p className="mt-1 text-sm">{paragraph}</p> {/* Paragraph description */}

      {/* Render the list of items passed through the items prop */}
      <ul className="mt-8 list-none h-[412px]"> 
        {items.map((item, index) => (
        <div className="flex flex-row mt-5" key={index}> {/* Each list item with checkmark */}
          <IoIosCheckmarkCircle className={`mr-2 ${highlightFirstItem && index === 0 ? 'text-blue-700' : ''}`} /> {/* Checkmark icon, blue if the first item is highlighted */}
          <li className={grayBullets ? "text-gray-500" : ""}> {/* Optional gray text for bullet */}
            <div className={`${highlightFirstItem && index === 0 ? 'text-blue-700 font-bold' : ''}`}>{item}</div> {/* Highlight first item text in blue */}
          </li>
        </div>
        ))}
      </ul>
        
      {/* Bottom section with additional info, separated by a top border */}
      <div className="border-t-[1px] h-[112px] border-solid border-blue-400" style={{ borderColor: 'var(--blue-400, #76A9FA)' }}>
        <ul className="list-disc pl-5 gap-5 mt-6"> {/* Additional info items in a bulleted list */}
          {info.map((ele, index) => (
            <li className={`mb-2 ${grayBullets ? "text-gray-500" : ""}`} key={index}>{ele}</li> 
          ))}
        </ul>
      </div>
    
      {children} {/* Render any child components passed inside the card */}
    </div>
  );
}

export default Card; 
