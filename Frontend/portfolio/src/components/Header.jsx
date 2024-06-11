/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Header({ activeSection }) {
    const [scrolledSection, setScrolledSection] = useState(activeSection);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY;
            let nearestSection = null;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    nearestSection = section;
                }
            });

            if (nearestSection) {
                setScrolledSection(nearestSection.id);
            }
        };

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className="sticky top-0 bg-[#0c0c31a1] text-[#b0edfc] p-4 z-10 md:h-[65px] lg:h-[70px] xl:h-[80px] flex flex-row justify-end md:shadow-md lg:shadow-lg xl:shadow-xl">
                <nav className=" hidden md:flex justify-end md:space-x-10 lg:space-x-16 xl:space-x-20 items-center md:text-[13px] lg:text-[13px] xl:text-[15px] lg:mr-[16px] xl:mr-[20px] font-sans">
                    <a
                        onClick={() => scrollToSection('intro')}
                        className={`transition-transform duration-300 cursor-pointer ${scrolledSection === 'intro' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}>HOME</a>
                    <a
                        onClick={() => scrollToSection('about')}
                        className={`transition-transform duration-300 cursor-pointer ${scrolledSection === 'about' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}>ABOUT ME</a>
                    <a
                        onClick={() => scrollToSection('techstack')}
                        className={`transition-transform duration-300 cursor-pointer ${scrolledSection === 'techstack' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}>TECH STACK</a>
                    <a
                        onClick={() => scrollToSection('projects')}
                        className={`transition-transform duration-300 cursor-pointer ${scrolledSection === 'projects' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}>MY PROJECTS</a>
                    <a
                        onClick={() => scrollToSection('info')}
                        className={`transition-transform duration-300 cursor-pointer ${scrolledSection === 'info' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}>CONTACT ME</a>
                </nav>
                <div className="md:hidden relative  bg-[#0c0c31] text-[#b0edfc]">
                    <header className="sticky top-0 bg-[#0c0c31a1] text-[#b0edfc] p-4 z-10 md:h-[65px] lg:h-[70px] xl:h-[80px] flex flex-row justify-end md:shadow-md lg:shadow-lg xl:shadow-xl">
                        <button
                            className="text-[#b0edfc] focus:outline-none md:hidden text-[20px]"
                            onClick={toggleSidebar}
                        >
                            ☰
                        </button>
                        <nav className="hidden md:flex justify-end md:space-x-10 lg:space-x-16 xl:space-x-20 items-center md:text-[13px] lg:text-[13px] xl:text-[15px] lg:mr-[16px] xl:mr-[20px] font-sans">
                            <a
                                onClick={() => scrollToSection('intro')}
                                className={`transition-transform duration-300 cursor-pointer ${scrolledSection === 'intro' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}
                            >
                                HOME
                            </a>
                            <a
                                onClick={() => scrollToSection('about')}
                                className={`transition-transform duration-300 cursor-pointer ${scrolledSection === 'about' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}
                            >
                                ABOUT ME
                            </a>
                            <a
                                onClick={() => scrollToSection('techstack')}
                                className={`transition-transform duration-300 cursor-pointer ${scrolledSection === 'techstack' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}
                            >
                                TECH STACK
                            </a>
                            <a
                                onClick={() => scrollToSection('projects')}
                                className={`transition-transform duration-300 cursor-pointer ${scrolledSection === 'projects' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}
                            >
                                MY PROJECTS
                            </a>
                            <a
                                onClick={() => scrollToSection('info')}
                                className={`transition-transform duration-300 cursor-pointer ${scrolledSection === 'info' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}
                            >
                                CONTACT ME
                            </a>
                        </nav>
                    </header>

                    <aside
                        className={`fixed top-0 left-0 h-full w-64 bg-[#0c0c31a1] text-[#b0edfc] transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-20 md:hidden`}
                    >
                        <button
                            className="text-[#b0edfc] absolute top-4 right-4 focus:outline-none text-[23px]"
                            onClick={toggleSidebar}
                        >
                            ✖
                        </button>
                        <nav className="flex flex-col space-y-4 mt-16 p-4 font-sans">
                            <a
                                onClick={() => {
                                    scrollToSection('intro');
                                    toggleSidebar();
                                }}
                                className={`transition-transform duration-300 cursor-pointer ${scrolledSection === 'intro' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}
                            >
                                HOME
                            </a>
                            <a
                                onClick={() => {
                                    scrollToSection('about');
                                    toggleSidebar();
                                }}
                                className={`transition-transform duration-300 cursor-pointer ${scrolledSection === 'about' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}
                            >
                                ABOUT ME
                            </a>
                            <a
                                onClick={() => {
                                    scrollToSection('techstack');
                                    toggleSidebar();
                                }}
                                className={`transition-transform duration-300 cursor-pointer ${scrolledSection === 'techstack' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}
                            >
                                TECH STACK
                            </a>
                            <a
                                onClick={() => {
                                    scrollToSection('projects');
                                    toggleSidebar();
                                }}
                                className={`transition-transform duration-300 cursor-pointer ${scrolledSection === 'projects' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}
                            >
                                MY PROJECTS
                            </a>
                            <a
                                onClick={() => {
                                    scrollToSection('info');
                                    toggleSidebar();
                                }}
                                className={`transition-transform duration-300 cursor-pointer ${scrolledSection === 'info' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}
                            >
                                CONTACT ME
                            </a>
                        </nav>
                    </aside>
                </div>
            </header>


            {activeSection !== 'intro' && (
                <div className='fixed z-10 lg:h-[30px] lg:w-[30px] xl:h-[40px] xl:w-[40px] text-[#b0edfc7c] bottom-[5vh] right-[5vw]'>
                    <i
                        className="fa-solid fa-circle-arrow-up text-[30px] cursor-pointer"
                        onClick={() => scrollToSection('intro')}
                    ></i>
                </div>
            )}



            <div className='fixed z-10 hidden lg:flex items-center justify-center text-[#b0edfc7c] bottom-[1vh] left-[2vw] flex-col'>
                <div className='lg:h-[250px] lg:w-[46px] xl:h-[280px] xl:w-[50px] mb-3 flex flex-col justify-between items-center'>
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
                <div className='lg:h-[120px] xl:h-[140px] w-[1px] border border-[#b0edfc7c]'></div>
            </div>

        </>
    );
}

Header.propTypes = {
    activeSection: PropTypes.string.isRequired
};

export default Header;
