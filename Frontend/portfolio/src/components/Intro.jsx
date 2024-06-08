/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Intro({activeSection}) {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='flex flex-col items-center'>
            <div className="flex flex-row justify-around items-center h-[100vh] w-[100%] font-sans ">
                <div className='flex flex-col min-w-[400px] min-h-[350px] p-[10px] justify-between'>
                    <div className='flex flex-col h-[70%] '>
                        <div className='flex flex-col'>
                            <h1 className='text-[75px] text-[#ffffff] leading-[60px]'>Hello, I&apos;m</h1>
                            <h1 className='text-[85px] mt-[-20px] text-[#6666ff]'>Aman</h1>
                        </div>
                        <p className='text-[#b3d1ff]'>A full-stack website developer who is learning <br />
                            the insights of technology with passion.</p>
                    </div>
                    <div className='flex min-w-[150px] h-[60px] p-2 pl-0'>
                        <button
                            onClick={() => scrollToSection('info')}
                            className={`${activeSection === 'info' ? 'text-[#00ffff]' : 'text-[#b0edfc]'} bg-[#6666ff] p-2 rounded w-[150px] mr-4 hover:bg-[#4b4bf8] duration-150 hover:text-[#cce6ff] shadow-md shadow-[#262641]`}>Get In Touch</button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`${activeSection === 'about' ? 'text-[#00ffff]' : 'text-[#b0edfc]'} border border-[#9393f9ad] p-2 rounded w-[150px] text-white hover:bg-[#6666ff] duration-150`}>Learn More</button>
                    </div>
                </div>
                <div className='flex h-[400px] rounded-2xl shadow-[#0000cc7b] shadow-md'>
                    <video autoPlay muted loop className='rounded-2xl'>
                        <source src='/video2.mp4' />
                    </video>
                </div>
            </div>
            <div className='h-[1px] w-[97%] border border-[#ffffff41]'></div>
        </div>
    )
}

export default Intro