/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Card from './Card';

function CardHolder({ title, langCard }) {
    return (
        <div className='flex flex-col justify-evenly items-start pl-[20px] min-h-[120px] w-[100%] bg-[#46464649] rounded-lg p-2 shadow-lg shadow-[#000000b0] mb-[50px] flex-wrap'>
            <div className='flex flex-col h-[50px] w-[100%]'>
                <div className="mb-2"> {/* Add margin bottom here */}
                    <h1 className='text-[#6666ff] text-[25px] font-thin'>{title}</h1>
                </div>
                <div className='h-[1px] w-[97%] border border-[#ffffff41]'></div>
            </div>
            <div className='flex flex-wrap justify-evenly w-[100%]'>
                {langCard.map((card, index) => (
                    <div key={index} className='p-[10px] flex flex-col items-center mb-1'>
                        <Card img={card.img} level={card.level} textColor={card.textColor} url = {card.url} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardHolder;
