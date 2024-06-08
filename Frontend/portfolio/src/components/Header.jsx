/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function Header({ activeSection }) {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <header className="sticky top-0 bg-[#0c0c31a1] text-[#b0edfc] p-4 z-10 h-[80px] flex flex-row justify-end shadow-xl">
                <nav className="flex justify-end space-x-20 items-center text-[15px] mr-[20px] font-sans">
                    <a
                        onClick={() => scrollToSection('intro')}
                        className={`transition-transform duration-300 cursor-pointer ${activeSection === 'intro' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}>HOME</a>
                    <a
                        onClick={() => scrollToSection('about')}
                        className={`transition-transform duration-300 cursor-pointer ${activeSection === 'about' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}>ABOUT ME</a>
                    <a
                        onClick={() => scrollToSection('techstack')}
                        className={`transition-transform duration-300 cursor-pointer ${activeSection === 'techstack' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}>TECH STACK</a>
                    <a
                        onClick={() => scrollToSection('projects')}
                        className={`transition-transform duration-300 cursor-pointer ${activeSection === 'projects' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}>MY PROJECTS</a>
                    <a
                        onClick={() => scrollToSection('info')}
                        className={`transition-transform duration-300 cursor-pointer ${activeSection === 'info' ? 'text-[#00ffff] scale-110' : 'text-[#b0edfc]'}`}>CONTACT ME</a>
                </nav>
            </header>

            {activeSection !== 'intro' && (
                <div className='sticky z-10 h-[40px] w-[40px] text-[#b0edfc7c] top-[90vh] left-[95vw]'>
                    <i
                        className="fa-solid fa-circle-arrow-up text-[30px] cursor-pointer"
                        onClick={() => scrollToSection('intro')}
                    ></i>
                </div>
            )}
        </>
    );
}

Header.propTypes = {
    activeSection: PropTypes.string.isRequired
};

export default Header;
