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
        <div className='flex flex-col h-[104vh] w-[100%] items-center justify-center mt-3'>
            <div className='flex flex-col h-[650px] justify-evenly items-center '>
                <h1 className='text-[#b0edfc] flex items-center justify-center text-[50px] font-extrabold'>Get In Touch</h1>
                <div className='text-[#b0edfca8] text-light flex flex-col justify-center items-center w-[580px] text-[17px]'>
                    <div>My inbox is always open. Whether you have a question or just want to say</div>
                    <div>hello, I&apos;ll try my best to get back to you! Feel free to mail me about any</div>
                    <div>relevant job updates.</div>
                </div>
                <a href="mailto:vishwakarmarambhawan576@gmail.com?subject=Hello%20Aman&body=Hi%20Aman%2C%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20you."
                    className='border border-[#80e5ff] text-[#80e5ff] h-[55px] w-[100px] font-serif text-[14px] flex items-center justify-center hover:scale-105 duration-100 hover:text-[#aa5df7] hover:border-[#bf80ff]'>
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
            <div className='flex flex-col text-[#c7eff9b2] justify-center items-center font-sans text-[13px] align-bottom font-thin'>
                <div>Made by Aman Vishwakarma</div>
                <div>Full-Stack Developer</div>
            </div>
        </div>
    );
}

export default Info;