/* eslint-disable no-unused-vars */
import React from 'react';
import TechCard from './TechCard';
import { techCard } from '../assets/techCard';

function Projects() {
  return (
    <div className='flex flex-col justify-center items-center w-[100%]'>
      <div className='font-sans mt-3 w-[89%]'>
        <div className='p-[10px] flex flex-col items-center'>
          <div className='flex flex-col w-[100%] min-h-[100vh] justify-center items-center font-sans '>
            <div className=' flex flex-col w-[95%] mt-[100px] h-[10%] '>
              <h1 className='text-white text-[36px] md:text-[40px] lg:text-[50px] xl:text-[60px]'>
                MY <span className='text-[#6666ff] text-[44px] md:text-[46px] lg:text-[65px] xl:text-[75px] hover:shadow-lg '>PROJECTS</span>
              </h1>
            </div>
            <div className='flex flex-col items-center float-left w-[95%] min-h-[45vh] mb-[50px] '>
              <div className='flex flex-row items-center justify-center mt-[50px] mb-[50px] ml-[80px] mr-[80px] p-[20px] flex-wrap w-[100%]'>

                {techCard.map((card, index) => (
                  <TechCard
                    key={index}
                    img={card.img}
                    vdoSrc={card.vdoSrc}
                    url={card.url}
                    title={card.title}
                  />
                ))}
              </div>
              <div className={` rounded-lg w-[80%] flex flex-col items-center bg-[#6666ff23] bg-cover shadow-lg shadow-black`}>
                <div className='h-[100px] flex flex-col items-center justify-center'>
                  <h1 className='text-[#d9fafc] text-[22px] md:text-[22px] lg:text-[25px] xl:text-[30px]'>The <span>FullStacks</span></h1>
                </div>

                <div className='flex flex-row flex-wrap lg:min-h-[80px] xl:min-h-[100px] w-[95%] p-5 items-center justify-evenly flex-2'>

                  <div className='flex flex-col items-center justify-evenly h-[380px] border-[1px] border-[#ffffffb1] w-[300px] rounded-md hover:shadow-xl transform hover:scale-105 transition duration-300 relative'>
                    <div className='w-[95%] h-[85%] rounded-md flex flwx-col bg-[url("./sharecarelogo.png")] bg-cover bg-center card-zoom hover:scale-105 delay-200 duration-100 hover:shadow-lg items-end justify-center'>
                      <div className=' flex w-[95%]  mb-2 justify-between'>
                        <button onClick={() => { window.location.href = "https://share-care-three.vercel.app" }} className='bg-[#ffa64d] h-[30px] text-[10px] w-[70px] hover:bg-[#f8b26d]'>Visit Site</button>
                        <button onClick={() => { window.location.href = "https://github.com/AMANVISHWAKARMA27/Share_Care" }} className='bg-[#ffa64d] h-[30px] text-[10px] w-[80px] hover:bg-[#f8b26d]'>Go to Repository</button>
                      </div>
                    </div>
                    <p className='text-[20px] lg:text-[22px] xl:text-[25px] text-[#80e5ff]'>Share & Care</p>
                  </div>

                  <div className='flex flex-col items-center justify-evenly h-[380px] border-[1px] border-[#ffffffb1] w-[300px] rounded-md hover:shadow-xl transform hover:scale-105 transition duration-300 relative'>
                    <div className='w-[95%] h-[85%] rounded-md flex flwx-col bg-[url("./amazonlogo.png")] bg-cover bg-center card-zoom hover:scale-105 delay-200 duration-100 hover:shadow-lg items-end justify-center'>
                      <div className=' flex w-[95%]  mb-2 justify-between'>
                        <button onClick={() => { window.location.href = "https://amazon-clone-client-gamma.vercel.app" }} className='bg-[#ffa64d] h-[30px] text-[10px] w-[70px] hover:bg-[#f8b26d]'>Visit Site</button>
                        <button onClick={() => { window.location.href = "https://github.com/AMANVISHWAKARMA27/Amazon-Clone" }} className='bg-[#ffa64d] h-[30px] text-[10px] w-[80px] hover:bg-[#f8b26d]'>Go to Repository</button>
                      </div>
                    </div>
                    <p className='text-[20px] lg:text-[22px] xl:text-[25px] text-[#80e5ff]'>Amazon Clone</p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
