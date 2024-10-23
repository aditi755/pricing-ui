import React from 'react';
import CardContainer from './CardContainer';
import CardHeader from './CardHeader';
import CardPriceSection from './CardPriceSection';
import CardItems from './CardItems';
import CardAdditionalInfo from './CardAdditionalInfo';
import CardActions from './CardActions';

const Card = ({
  className, style, title, paragraph, items, label, spanTime, highlightFirstItem, showPrice, discount, price, info, grayBullets, highlightPrice, children
}) => {
  return (
    <CardContainer className={className} style={style}>
       {/* pass the props down to individual card ui elements  */}
      <CardHeader label={label} title={title} spanTime={spanTime} />
      <CardPriceSection showPrice={showPrice} discount={discount} price={price} highlightPrice={highlightPrice} />
      <p className="mt-1 text-sm">{paragraph}</p>
      <CardItems items={items} highlightFirstItem={highlightFirstItem} grayBullets={grayBullets} />
      <CardAdditionalInfo info={info} grayBullets={grayBullets}/>
      <CardActions>{children}</CardActions>
    </CardContainer>
  );
};

export default Card;
