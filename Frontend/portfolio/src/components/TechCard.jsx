/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function TechCard({ img, vdoSrc, title }) {
    return (
        <div>
            <div className={`bg-[url('./cardbg.jpeg')] bg-cover shadow-lg h-[180px] w-[260px] m-[10px] rounded-lg flex flex-col items-center justify-around hover:shadow-lg transform hover:scale-105 transition duration-300 relative`}>
                <div className={`h-[80%] w-[98%] rounded-lg mt-[1px] bg-cover flex justify-center items-center hover:bg-none`} style={{ backgroundImage: `url(${img})` }}>
                    <video autoPlay muted loop className='rounded-lg inset-0 transition-opacity opacity-0 hover:opacity-100'>
                        <source src={vdoSrc} />
                    </video>
                </div>
                <h1 className='text-[20px] font-light text-[#80e5ff]'>{title}</h1>
            </div>
        </div>
    )
}

export default TechCard