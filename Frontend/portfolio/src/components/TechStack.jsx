/* eslint-disable no-unused-vars */
import React from 'react';
import CardHolder from './CardHolder';
import { langCard } from '../assets/langCard';
import { libCard } from '../assets/libCard';
import { toolCard } from '../assets/toolCard';

function TechStack() {
    return (
        <div className='flex flex-col justify-around items-center min-h-[100vh] w-[100%]'>
            <div className='flex flex-col w-[100%] min-h-[240vh] items-center justify-around font-sans'>
                <div className='flex justify-center items-center h-[10%] w-[90%] text-white '>
                    <h1 className='text-[65px] text-[#e6f2ff]'>WHAT I HAVE LEARNT SO FAR ?</h1>
                </div>
                <div className='flex flex-col h-[88%] w-[95%] justify-center items-center rounded-lg'>
                    <CardHolder title={"Programming Language"} langCard={langCard} />
                    <CardHolder title={"Libraries & Framework"} langCard={libCard} />
                    <CardHolder title={"Tools"} langCard={toolCard} />
                </div>
            </div>
            <div className='h-[1px] w-[97%] border border-[#ffffff41]'></div>
        </div>
    );
}

export default TechStack