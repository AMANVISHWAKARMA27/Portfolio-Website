/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Intro({ activeSection }) {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='flex flex-col items-center md:min-h-[70vh] lg:min-h-[100vh]'>
            <div className="hidden md:flex flex-row justify-center items-center min-h-[70vh] lg:min-h-[100vh] min-w-[600px] font-sans ml-[30px] mr-[30px]">
                <div className='flex flex-col md:min-w-[20px] md:min-h-[250px] lg:w-[300px] xl:min-w-[400px] lg:min-h-[300px] p-[10px] justify-between  mr-3'>
                    <div className='flex flex-col lg:h-[150px] xl:h-[250px] w-[100%]'>
                        <div className='flex flex-col'>
                            <h1 className='md:text-[30px] lg:text-[55px] xl:text-[75px] text-[#ffffff] leading-[60px]'>Hello, I&apos;m</h1>
                            <h1 className='md:text-[35px] lg:text-[60px] xl:text-[85px] mt-[-20px] text-[#6666ff]'>Aman</h1>
                        </div>
                        <p className='text-[#b3d1ff] text-wrap'>A full-stack website developer who is learning
                            the insights of technology with passion.</p>
                    </div>
                    <div className='flex md:min-w-[100px] md:min-h-[40px] lg:min-w-[120px] lg:min-h-[50px] xl:min-w-[150px] xl:h-[60px] p-2 pl-0 '>
                        <button
                            onClick={() => scrollToSection('info')}
                            className={`${activeSection === 'info' ? 'text-[#00ffff]' : 'text-[#b0edfc]'} bg-[#6666ff] p-2 rounded lg:w-[130px] xl:w-[150px] mr-4 hover:bg-[#4b4bf8] duration-150 hover:text-[#cce6ff] shadow-md shadow-[#262641]`}>Get In Touch</button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`${activeSection === 'about' ? 'text-[#00ffff]' : 'text-[#b0edfc]'} border border-[#9393f9ad] p-2 rounded lg:w-[130px] xl:w-[150px] text-white hover:bg-[#6666ff] duration-150`}>Learn More</button>
                    </div>
                </div>
                <div className='flex md:h-[200px] md:w-[580px] lg:h-[300px] xl:h-[400px] rounded-2xl shadow-[#0000cc7b] shadow-md'>
                    <video autoPlay muted loop className='rounded-2xl '>
                        <source src='/video2.mp4' />
                    </video>
                </div>
            </div>


            <div className="flex md:hidden flex-col justify-center items-center min-h-[100vh] min-w-[600px%] font-sans ml-[30px] mr-[30px]">
                <div className='flex flex-col min-h-[100vh] md:min-h-[650px] md:min-w-[450px] p-[10px] justify-evenly '>
                    <div className='flex flex-col md:h-[200px] w-[70%]'>
                        <div className='flex flex-col'>
                            <h1 className='text-[40px] text-[#ffffff] leading-[60px]'>Hello, I&apos;m</h1>
                            <h1 className='text-[50px] mt-[-20px] text-[#6666ff]'>Aman</h1>
                        </div>
                        <p className='text-[#b3d1ff] text-wrap'>A full-stack website developer who is learning
                            the insights of technology with passion.</p>
                    </div>
                    <div className='flex h-[250px] w-[450px] md:h-[250px] md:w-[400px] rounded-2xl shadow-[#0000cc7b] shadow-md'>
                        <video autoPlay muted loop className='rounded-2xl'>
                            <source src='/video2.mp4' />
                        </video>
                    </div>
                    <div className='flex lg:min-w-[120px] lg:min-h-[50px] xl:min-w-[150px] xl:h-[60px] p-2 pl-0'>
                        <button
                            onClick={() => scrollToSection('info')}
                            className={`${activeSection === 'info' ? 'text-[#00ffff]' : 'text-[#b0edfc]'} bg-[#6666ff] p-2 rounded w-[130px] mr-4 hover:bg-[#4b4bf8] duration-150 hover:text-[#cce6ff] shadow-md shadow-[#262641]`}>Get In Touch</button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className={`${activeSection === 'about' ? 'text-[#00ffff]' : 'text-[#b0edfc]'} border border-[#9393f9ad] p-2 rounded w-[130px] text-white hover:bg-[#6666ff] duration-150`}>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro