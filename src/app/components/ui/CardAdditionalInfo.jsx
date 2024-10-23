import React from 'react';

const CardAdditionalInfo = ({ info, grayBullets, children }) => {
  return (
    <div className="border-t-[1px] h-[112px] border-solid border-blue-400">
      <ul className="list-disc pl-5 gap-5 mt-6">
        {info.map((ele, index) => (
          <li className={`mb-2 ${grayBullets ? 'text-gray-500' : ''}`} key={index}>
            {ele}
          </li>
        ))}
      </ul>      
    </div>
  );
};

export default CardAdditionalInfo;
