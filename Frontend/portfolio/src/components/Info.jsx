/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';

function Info() {

    const [display, setDisplay] = useState("hidden")

    const handleCopy = () => {
        navigator.clipboard.writeText('+91 8957175307').then(() => {
            setDisplay("block")
            setTimeout(() => {
                setDisplay("hidden");
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };
    return (
        <div className='flex flex-col justify-between items-center h-[100vh] w-[100%]'>
            <div className='flex flex-col h-[60%] w-[80%] items-center justify-center mt-[100px]'>
                <div className='flex flex-col h-[50vh] md:h-[80vh] lg:h-[100vh] items-center justify-between'>
                    <h1 className='text-[#b0edfc] flex items-center justify-center text-[35px] md:text-[40px] lg:text-[45px] xl:text-[50px] font-extrabold'>Get In Touch</h1>
                    <div className='text-[#b0edfca8] text-light flex flex-col justify-center items-center w-[360px] lg:w-[500px] xl:w-[580px] text-[10px] md:text-[15px] lg:text-[15px] xl:text-[17px] '>
                        <div>My inbox is always open. Whether you have a question or just want to say</div>
                        <div>hello, I&apos;ll try my best to get back to you! Feel free to mail me about any</div>
                        <div>relevant job updates.</div>
                    </div>
                    <a href="mailto:vishwakarmarambhawan576@gmail.com?subject=Hello%20Aman&body=Hi%20Aman%2C%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20you."
                        className='border border-[#80e5ff] text-[#80e5ff] h-[45px] w-[80px] text-[12px] lg:h-[52px] lg:w-[90px] lg:text-[13px] xl:h-[55px] xl:w-[100px] font-serif xl:text-[14px] flex items-center justify-center hover:scale-105 duration-100 hover:text-[#aa5df7] hover:border-[#bf80ff]'>
                        Mail Me
                    </a>
                    <div className='flex flex-row justify-around items-center w-[250px]'>
                        <div className='h-[1px] border border-[#b0edfc] w-[100px]'></div>
                        <p className='text-[#b0edfc]'>or</p>
                        <div className='h-[1px] border border-[#b0edfc] w-[100px]'></div>
                    </div>
                    <div>
                        <p className='text-[#b0edfc]'>Call on&nbsp; <a
                            className='cursor-pointer hover:scale-110 hover:text-[#aa5df7]'
                            onClick={handleCopy}
                        >
                            +91 8957175307
                        </a></p>
                        <p className={`text-green-400 text-[12px] absolute ${display}`}>Phone number copied to clipboard.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col text-[#c7eff9b2] justify-center items-center font-sans text-[13px] align-bottom font-thin mb-3'>
                <div className='w-[270px] mb-3 flex flex-row justify-between items-center'>
                    <div className='flex lg:h-[25px] lg:w-[25px] xl:h-[30px] xl:w-[30px] justify-center items-center cursor-pointer hover:scale-125 duration-100'>
                        <a href='https://github.com/AMANVISHWAKARMA27'><i className="fa-brands fa-github text-[30px]"></i></a>
                    </div>
                    <div className='flex lg:h-[25px] lg:w-[25px] xl:h-[30px] xl:w-[30px] justify-center items-center cursor-pointer hover:scale-125 duration-100'>
                        <a href='https://www.linkedin.com/in/aman-vishwakarma-3b788828a?'><i className="fa-brands fa-linkedin text-[30px]"></i></a>
                    </div>
                    <div className='flex lg:h-[25px] lg:w-[25px] xl:h-[30px] xl:w-[30px] justify-center items-center cursor-pointer hover:scale-125 duration-100'>
                        <a href='https://www.instagram.com/whilst_somebody/'><i className="fa-brands fa-instagram text-[30px]"></i></a>
                    </div>
                    <div className='flex lg:h-[25px] lg:w-[25px] xl:h-[30px] xl:w-[30px] justify-center items-center cursor-pointer hover:scale-125 duration-100'>
                        <a href='discordapp.com/users/amanvishwakarma2864'><i className="fa-brands fa-discord text-[30px]"></i></a>
                    </div>
                    <div className='flex lg:h-[25px] lg:w-[25px] xl:h-[30px] xl:w-[30px] justify-center items-center cursor-pointer hover:scale-125 duration-100'>
                        <a href='t.me/whilst_somebody'><i className="fa-brands fa-telegram text-[30px]"></i></a>
                    </div>
                    <div className='flex lg:h-[25px] lg:w-[25px] xl:h-[30px] xl:w-[30px] justify-center items-center cursor-pointer hover:scale-125 duration-100'>
                        <a
                            href='https://x.com/whilst_somebody?t=wAvBJmeei5BpwydKSOTigg&s=09'>
                            <i className="fa-brands fa-square-x-twitter text-[30px]"></i></a>
                    </div>
                </div>
                <div>Made by Aman Vishwakarma</div>
                <div>Full-Stack Developer</div>
            </div>
        </div>
    );
}

export default Info;