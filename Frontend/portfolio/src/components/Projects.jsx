/* eslint-disable no-unused-vars */
import React from 'react';
import TechCard from './TechCard';
import { techCard } from '../assets/techCard'; // Importing the techCard array

function Projects() {
  return (
    <div className='font-sans'>
      <div className='p-[10px]'>
        <div className='flex flex-col w-[100%] min-h-[100vh] justify-between items-center font-sans '>
          <div className=' flex flex-col w-[95%] mt-[100px] h-[15vh] '>
            <h1 className='text-white text-[60px]'>
              MY <span className='text-[#6666ff] text-[75px] hover:shadow-lg '>PROJECTS</span>
            </h1>
          </div>
          <div className='flex flex-col items-center float-left w-[95%] min-h-[45vh] mb-[50px] '>
            <div className='flex flex-row items-center justify-center mt-[50px] mb-[50px] ml-[80px] mr-[80px] p-[20px] flex-wrap'>
              {/* Map over the techCard array and render each TechCard */}
              {techCard.map((card, index) => (
                <TechCard
                  key={index}
                  img={card.img}
                  vdoSrc={card.vdoSrc}
                  title={card.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
