/* eslint-disable no-unused-vars */
// App.js or your main component
import React, { useEffect, useState } from 'react';
import Intro from './components/Intro';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Info from './components/Info';
import Header from './components/Header';
import SplashScreen from './components/SplashScreen'

function App() {
    const [activeSection, setActiveSection] = useState('intro');
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {

        const splashTimer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);

        return () => clearTimeout(splashTimer);
    }, []);

    return (
        <div>
            {showSplash ? (
                <SplashScreen handleSplashEnd={() => setShowSplash(false)} />
            ) : (
                <>
                    <Header activeSection={activeSection} />
                    <section id="intro"><Intro /></section>
                    <div className='h-[1px] w-[97%] border border-[#ffffff41]'></div>
                    <section id="about"><About /></section>
                    <div className='h-[1px] w-[97%] border border-[#ffffff41]'></div>
                    <section id="techstack"><TechStack /></section>
                    <div className='h-[1px] w-[97%] border border-[#ffffff41]'></div>
                    <section id="projects"><Projects /></section>
                    <div className='h-[1px] w-[97%] border border-[#ffffff41]'></div>
                    <section id="info"><Info /></section>
                </>
            )}
        </div>
    );
}

export default App;
