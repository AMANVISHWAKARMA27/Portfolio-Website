/* eslint-disable no-unused-vars */
import React from 'react';
import CardHolder from './CardHolder';
import { langCard } from '../assets/langCard';
import { libCard } from '../assets/libCard';
import { toolCard } from '../assets/toolCard';

function TechStack() {
    return (
        <div className='flex flex-col justify-center items-center min-h-[60vh] w-[100%] mt-3'>
            <div className='flex flex-col w-[100%] min-h-[240vh] items-center justify-around font-sans'>
                <div className='flex justify-center items-center h-[5%] w-[90%] text-white'>
                    <h1 className='text-[65px] text-[#6666ff] '><span className='text-white'>WHAT</span> I HAVE <span className='text-white'>LEARNT</span> SO FAR <span className='text-white'>?</span></h1>
                </div>
                <div className='flex flex-col h-[88%] w-[95%] justify-center items-center rounded-lg'>
                    <CardHolder title={"Programming Language"} langCard={langCard} />
                    <CardHolder title={"Libraries & Framework"} langCard={libCard} />
                    <CardHolder title={"Tools"} langCard={toolCard} />
                </div>
            </div>
        </div>
    );
}

export default TechStack