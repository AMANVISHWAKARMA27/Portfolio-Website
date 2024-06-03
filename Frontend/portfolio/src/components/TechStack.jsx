/* eslint-disable no-unused-vars */
import React from 'react'

function TechStack() {
    return (
        <div className='flex flex-col w-[100%] min-h-[100vh] items-center justify-around font-sans'>

            <div className='flex justify-center items-center h-[15%] w-[90%] text-white '>
                <h1 className='text-[55px] text-[#e6f2ff]'>WHAT I HAVE LEARNT SO FAR ?</h1>
            </div>
            <div className='flex flex-col h-[82%] w-[95%] justify-center items-center rounded-lg'>
                <div className='flex flex-col justify-evenly items-start pl-[20px] min-h-[120px] w-[100%] bg-[#46464660] rounded-lg p-2'>
                    <div className='flex flex-col h-[50px] w-[100%]'>
                        <div>
                            <h1 className='text-[#6666ff] text-[25px] font-thin'>Programming Languages</h1>
                        </div>
                        <div className='h-[1px] w-[97%] border border-[#ffffff41]'></div>
                    </div>
                    <div className='flex float-left justify-evenly w-[100%]'>
                        <div className='p-[10px] flex flex-col items-center'>
                            <div className='h-[120px] w-[120px] outline flex flex-col justify-center items-center'>
                                <div className='h-[100%] w-[100%] bg-[url("./public/c.png")] bg-cover rounded-sm'>
                                </div>
                            </div>
                            <p className='text-red-600'>Advanced</p>
                        </div>
                        <div className='p-[10px] flex flex-col items-center'>
                            <div className='h-[120px] w-[120px] outline flex flex-col justify-center items-center'>
                                <div className='h-[100%] w-[100%] bg-[url("./public/cpp.png")] bg-cover rounded-sm'>
                                </div>
                            </div>
                            <p className='text-red-600'>Advanced</p>
                        </div>
                        <div className='p-[10px] flex flex-col items-center'>
                            <div className='h-[120px] w-[120px] outline flex flex-col justify-center items-center'>
                                <div className='h-[100%] w-[100%] bg-[url("./public/js.png")] bg-cover rounded-sm'>
                                </div>
                            </div>
                            <p className='text-red-600'>Advanced</p>
                        </div>
                        <div className='p-[10px] flex flex-col items-center'>
                            <div className='h-[120px] w-[120px] outline flex flex-col justify-center items-center'>
                                <div className='h-[100%] w-[100%] bg-[url("./public/python.png")] bg-cover rounded-sm'>
                                </div>
                            </div>
                            <p className='text-red-600'>Advanced</p>
                        </div>
                        <div className='p-[10px] flex flex-col items-center'>
                            <div className='h-[120px] w-[120px] outline flex flex-col justify-center items-center'>
                                <div className='h-[100%] w-[100%] bg-[url("./public/html.jpeg")] bg-cover rounded-sm'>
                                </div>
                            </div>
                            <p className='text-red-600'>Advanced</p>
                        </div>
                        <div className='p-[10px] flex flex-col items-center'>
                            <div className='h-[120px] w-[120px] outline flex flex-col justify-center items-center'>
                                <div className='h-[100%] w-[100%] bg-[url("./public/css.jpeg")] bg-cover rounded-sm'>
                                </div>
                            </div>
                            <p className='text-red-600'>Advanced</p>
                        </div>
                        <div className='p-[10px] flex flex-col items-center'>
                            <div className='h-[120px] w-[120px] outline flex flex-col justify-center items-center'>
                                <div className='h-[100%] w-[100%] bg-[url("./public/java.png")] bg-cover rounded-sm'>
                                </div>
                            </div>
                            <p className='text-yellow-500'>Intermediate</p>
                        </div>
                        <div className='p-[10px] flex flex-col items-center'>
                            <div className='h-[120px] w-[120px] outline flex flex-col justify-center items-center'>
                                <div className='h-[100%] w-[100%] bg-[url("./public/sql.png")] bg-cover rounded-sm'>
                                </div>
                            </div>
                            <p className='text-yellow-500'>Intermediate</p>
                        </div>
                        <div className='p-[10px] flex flex-col items-center'>
                            <div className='h-[120px] w-[120px] outline flex flex-col justify-center items-center'>
                                <div className='h-[100%] w-[100%] bg-[url("./public/go.png")] bg-cover rounded-sm'>
                                </div>
                            </div>
                            <p className='text-green-600'>Beginner</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col h-[82%] w-[95%] justify-center items-center rounded-lg'>
                <div className='flex flex-col justify-center items-start pl-[20px] min-h-[80px] w-[100%] bg-[#46464660] rounded-lg'>
                    <div>
                        <h1 className='text-[#6666ff] text-[25px] font-thin'>Framewords & Libraries</h1>
                    </div>
                    <div className='h-[1px] w-[97%] border border-[#ffffff41]'></div>
                    <div>

                    </div>

                </div>
            </div>

            <div className='flex flex-col h-[82%] w-[95%] justify-center items-center rounded-lg'>
                <div className='flex flex-col justify-center items-start pl-[20px] min-h-[80px] w-[100%] bg-[#46464660] rounded-lg'>
                    <div>
                        <h1 className='text-[#6666ff] text-[25px] font-thin'>Tools</h1>
                    </div>
                    <div className='h-[1px] w-[97%] border border-[#ffffff41]'></div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default TechStack