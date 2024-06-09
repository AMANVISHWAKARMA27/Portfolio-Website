/* eslint-disable no-unused-vars */
import React from 'react';
import TechCard from './TechCard';
import { techCard } from '../assets/techCard'; 

function Projects() {
  return (
    <div className='font-sans'>
      <div className='p-[10px] flex flex-col justify-around items-center'>
        <div className='flex flex-col w-[100%] min-h-[100vh] justify-between items-center font-sans '>

          <div className=' flex flex-col w-[95%] mt-[100px] h-[15vh] '>
            <h1 className='text-white text-[60px]'>
              MY <span className='text-[#6666ff] text-[75px] hover:shadow-lg '>PROJECTS</span>
            </h1>
          </div>
          <div className='flex flex-col items-center float-left w-[95%] min-h-[45vh] mb-[50px] '>
            <div className='flex flex-row items-center justify-center mt-[50px] mb-[50px] ml-[80px] mr-[80px] p-[20px] flex-wrap'>

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
                <h1 className='text-[#d9fafc] text-[30px]'>The <span>FullStacks</span></h1>
              </div>
              <div className='flex flex-row flex-wrap min-h-[100px] w-[95%] p-5 items-center justify-center '>

                <div className='flex flex-col items-center justify-around h-[380px] border-[1px] border-[#ffffffb1] w-[300px] rounded-md hover:shadow-xl transform hover:scale-105 transition duration-300 relative'>
                  <div className='w-[95%] h-[85%] rounded-md flex flwx-col bg-[url("./sharecarelogo.png")] bg-cover bg-center card-zoom hover:scale-105 delay-200 duration-100 hover:shadow-lg items-end justify-center'>
                    <div className=' flex w-[95%]  mb-2 justify-between'>
                      <button onClick={() => { window.location.href = "https://share-care-three.vercel.app" }} className='bg-[#ffa64d] h-[30px] text-[10px] w-[70px] hover:bg-[#f8b26d]'>Visit Site</button>
                      <button onClick={() => { window.location.href = "https://github.com/AMANVISHWAKARMA27/Share_Care" }} className='bg-[#ffa64d] h-[30px] text-[10px] w-[80px] hover:bg-[#f8b26d]'>Go to Repository</button>
                    </div>
                  </div>
                  <p className='text-[25px] text-[#80e5ff]'>Share & Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[1px] w-[97%] border border-[#ffffff41]'></div>
      </div>
    </div>
  );
}

export default Projects;
