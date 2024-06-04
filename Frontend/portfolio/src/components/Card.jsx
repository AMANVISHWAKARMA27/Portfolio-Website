/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Card({ img, level, textColor }) {
    return (
        <div className='ml-[10px] mr-[10px] flex flex-col justify-center items-center rounded-sm shadow-md shawdow-[#fff] bg-[#1a191974]'>
            <div  className='h-[140px] w-[140px] flex flex-col justify-center items-center rounded-sm transition duration-300 transform hover:scale-105 cursor-pointer'>
                <div className='h-[100%] w-[100%] bg-cover rounded-lg items-center' style={{ backgroundImage: `url(${img})` }}></div>
            </div>
            <p className={`${textColor}`}>{level}</p>
        </div>
    )
}

export default Card