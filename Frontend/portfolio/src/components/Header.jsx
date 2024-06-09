/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Header({ activeSection }) {
    const [scrolledSection, setScrolledSection] = useState(activeSection);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
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
            <header className="sticky top-0 bg-[#0c0c31a1] text-[#b0edfc] p-4 z-10 h-[80px] flex flex-row justify-end shadow-xl">
                <nav className="flex justify-end space-x-20 items-center text-[15px] mr-[20px] font-sans">
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
            </header>


            {activeSection !== 'intro' && (
                <div className='fixed z-10 h-[40px] w-[40px] text-[#b0edfc7c] bottom-[5vh] right-[5vw]'>
                    <i
                        className="fas fa-arrow-up text-[30px] cursor-pointer"
                        onClick={() => scrollToSection('intro')}
                    ></i>
                </div>
            )}



            <div className='fixed z-10 flex items-center justify-center text-[#b0edfc7c] bottom-[1vh] left-[2vw] flex-col'>
                <div className=' h-[280px] w-[50px] mb-3 flex flex-col justify-between items-center'>
                    <div className='flex h-[30px] w-[30px] justify-center items-center cursor-pointer hover:scale-125 duration-100'>
                        <a href='https://github.com/AMANVISHWAKARMA27'><i className="fa-brands fa-github text-[30px]"></i></a>
                    </div>
                    <div className='flex h-[30px] w-[30px] justify-center items-center cursor-pointer hover:scale-125 duration-100'>
                        <a href='https://www.linkedin.com/in/aman-vishwakarma-3b788828a?'><i className="fa-brands fa-linkedin text-[30px]"></i></a>
                    </div>
                    <div className='flex h-[30px] w-[30px] justify-center items-center cursor-pointer hover:scale-125 duration-100'>
                        <a href='https://www.instagram.com/whilst_somebody/'><i className="fa-brands fa-instagram text-[30px]"></i></a>
                    </div>
                    <div className='flex h-[30px] w-[30px] justify-center items-center cursor-pointer hover:scale-125 duration-100'>
                        <a href='discordapp.com/users/amanvishwakarma2864'><i className="fa-brands fa-discord text-[30px]"></i></a>
                    </div>
                    <div className='flex h-[30px] w-[30px] justify-center items-center cursor-pointer hover:scale-125 duration-100'>
                        <a href='t.me/whilst_somebody'><i className="fa-brands fa-telegram text-[30px]"></i></a>
                    </div>
                    <div className='flex h-[30px] w-[30px] justify-center items-center cursor-pointer hover:scale-125 duration-100'>
                        <a
                            href='https://x.com/whilst_somebody?t=wAvBJmeei5BpwydKSOTigg&s=09'>
                            <i className="fa-brands fa-square-x-twitter text-[30px]"></i></a>
                    </div>
                </div>
                <div className='h-[140px] w-[1px] border border-[#b0edfc7c]'></div>
            </div>

        </>
    );
}

Header.propTypes = {
    activeSection: PropTypes.string.isRequired
};

export default Header;
