/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Card({ img, level, textColor, url }) {
    return (
        <div className='ml-[10px] mr-[10px] flex flex-col justify-center items-center rounded-sm shadow-md shawdow-[#fff] bg-[#1a191974]'>
            <div onClick={() => { window.location.href = url }} className='h-[90px] w-[90px] md:h-[100px] md:w-[100px] lg:h-[120px] lg:w-[120px] xl:h-[140px] xl:w-[140px] flex flex-col justify-center items-center rounded-sm transition duration-300 transform hover:scale-105 cursor-pointer'>
                <div className='h-[100%] w-[100%] bg-cover rounded-lg items-center' style={{ backgroundImage: `url(${img})` }}></div>
            </div>
            <p className={`${textColor} md:text-[15px] lg:text-[18px] mt-1`}>{level}</p>
        </div>
    )
}

export default Card