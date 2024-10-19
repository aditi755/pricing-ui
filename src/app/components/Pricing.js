"use client"
import React, {useState} from 'react'
import Button from './ui/Button'; 
import Card from './ui/Card'
import pricingData from '../data/pricingData.json'; 

function Pricing() {
    //state to handle the monthly and annual toggle button along with its position
    const [activePlan, setActivePlan] = useState('monthly');
    const [buttonPosition, setButtonPosition] = useState(0); 

    const handleClick = (plan, position) => {
        setActivePlan(plan);
        setButtonPosition(position); 
    };

    return (
        <div>
            <div className="relative flex flex-row gap-5 max-w-80 justify-center mx-auto w-44 h-10 bg-blue-100 text-center rounded-md">
                
                <div 
                    className="absolute h-full bg-white rounded-md transition-all duration-300" 
                    style={{ width: '50%', left: buttonPosition, margin:"5px" }} 
                />
                <button 
                    className="z-10" 
                    onClick={() => handleClick('monthly', 0)}
                >
                    Monthly
                </button>
                <button 
                    className="z-10" 
                    onClick={() => handleClick('annual', '50%')}
                >
                    Annual
                </button>               
                </div>
           {/* pass all the data as prop to reusable card ui component */}
            <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {pricingData.cards.map((card, index) => (
                    <Card 
                        key={index}
                        label={card.label}
                        title={card.title}
                        paragraph={card.paragraph}
                        items={card.items}
                        info={card.info}
                        grayBullets={card.grayBullets}
                        showPrice={card.showPrice}
                        discount={card.discount}
                        highlightPrice={card.highlightPrice}
                        price={card.price}
                        className={card.className} 
                        style={card.style}
                        highlightFirstItem={card.highlightFirstItem}
                        spanTime={card.spanTime}
                        
                    >
                        <Button className={`mt-16 text-center ${index === 2 ? 'bg-white text-black' : 'bg-blue-600 text-white'}`}
                        text={card.buttonText}>      
                        </Button>
                    </Card>
                ))}
            </div>
            
        </div>
    )
}

export default Pricing
