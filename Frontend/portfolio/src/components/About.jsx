/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function About() {
    const [quote, setQuote] = useState("loading...");
    const [author, setAuthor] = useState("loading...");

    const generateQuote = async () => {
        try {
            const response = await fetch("https://api.quotable.io/random");
            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.author);
        } catch (error) {
            console.error("Failed to fetch the quote", error);
            setQuote("Failed to load quote");
            setAuthor("Invalid");
        }
    };

    useEffect(() => {
        generateQuote();
    }, []);

    return (
        <div className='flex flex-col items-center mt-3 w-[100%]'>
            <div className='flex flex-col h-[100vh] w-[100%] justify-around items-center text-white font-sans'>
                <div className='hidden md:flex md:flex-row h-[35%] w-[85%] justify-between pt-[20px]'>
                    <div className='flex flex-col h-[100%] w-[49%] justify-center items-center'>
                        <div>
                            <h1 className='md:text-[28px] lg:text-[30px] xl:text-[30px] leading-3 text-[#ccffff]'>WHO AM I ?</h1>
                            <h1 className='md:text-[35px] lg:text-[50px] xl:text-[65px] text-[#6666ff]'>Let&apos;s discover</h1>
                        </div>
                    </div>
                    <div className='flex min-h-[200px] w-[660px] justify-center items-center flex-col'>
                        <div className='h-[70%] w-[75%] flex flex-col justify-center items-center rounded-lg bg-[#0d0d3370] md:text-[16px] lg:text-[18px] xl:text-[20px] shadow-[0px_0px_4px_0px_rgba(0, 191, 255, 0.3)] p-4'>
                            <blockquote className='text-center m-2'>
                                &quot;{quote}&quot;
                            </blockquote>
                            <p className='italic font-light md:text-[] lg:text-[12px] xl:text-[13px] text-right w-full'>
                                -&nbsp;{author}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex md:hidden flex-col h-[50%] w-[85%] pt-[20px]'>
                    <div className='flex flex-col h-[100%] w-[100%] justify-center'>
                            <h1 className='text-[26px] md:text-[28px] lg:text-[30px] xl:text-[30px] leading-3 text-[#ccffff]'>WHO AM I ?</h1>
                            <h1 className='text-[37px] md:text-[35px] lg:text-[50px] xl:text-[65px] text-[#6666ff]'>Let&apos;s discover</h1>
                    </div>
                    <div className='flex min-h-[200px] min-w-[100%] flex-col justify-center items-center'>
                        <div className='h-[70%] w-[75%] flex flex-col justify-center items-center rounded-lg bg-[#0d0d3370] md:text-[16px] lg:text-[18px] xl:text-[20px] shadow-[0px_0px_4px_0px_rgba(0, 191, 255, 0.3)] p-4'>
                            <blockquote className='text-center m-2'>
                                &quot;{quote}&quot;
                            </blockquote>
                            <p className='italic font-light md:text-[] lg:text-[12px] xl:text-[13px] text-right w-full'>
                                -&nbsp;{author}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row h-[40%] w-[85%] font-thin items-center justify-center'>
                    <p className='text-[18px] md:text-[18px] lg:text-[27px] xl:text-[30px] text-[#b3ecff] indent-1'>
                        My name is <span className='font-semibold font-sans text-[#6666ff] hover:text-[#258bf1] duration-100'><a href='https://www.linkedin.com/in/aman-vishwakarma-3b788828a?'>Aman Vishwakarma</a></span>, a fervent tech aficionado currently immersed in the pursuit of a <span className='font-semibold font-sans text-[#6666ff] hover:text-[#258bf1] duration-100 cursor-default'>Bachelor&apos;s in Technology</span>
                        degree with a specialization in <span className='font-semibold font-sans text-[#6666ff] hover:text-[#258bf1] duration-100 cursor-default'>Information Technology</span> at the prestigious <span className='font-semibold font-sans text-[#6666ff] hover:text-[#258bf1] duration-100'><a href='https://iiitl.ac.in/'>Indian Institute of Information Technology, Lucknow</a></span> from the year 2023 to 2027.
                        Engaged in the enthralling domain of Web Development, I aspire to excel as a Full Stack Web Developer, driven by a relentless
                        passion for innovation and learning.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;