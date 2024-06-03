/* eslint-disable no-unused-vars */
import React from 'react'

function About() {
    return (
        <div className='flex flex-col h-[100vh] w-[100%] justify-around items-center text-white'>
            <div className='flex flex-row h-[35%] w-[98%] justify-between pt-[20px]'>
                <div className='flex flex-col h-[100%] w-[49%] justify-center items-center '>
                    <div>
                        <h1 className='text-[30px] leading-3 text-[#ccffff]'>WHO AM I ?</h1>
                        <h1 className='text-[65px] text-[#00bfff]'>Let&apos;s discover</h1>
                    </div>
                </div>
                <div className='flex h-[100%] w-[49%] justify-center items-center'>
                    <div className='h-[70%] w-[80%] flex justify-center items-center rounded-lg  bg-[#0d0d3370] text-[20px] shadow-[0px_0px_4px_0px_rgba(0, 191, 255, 0.3)]'>
                        <blockquote>
                            &quot;Quote of the day&quot;
                        </blockquote>
                    </div>
                </div>
            </div>
            <div className='flex flex-row h-[60%] w-[98%]'>

            </div>
        </div>
    )
}

export default About