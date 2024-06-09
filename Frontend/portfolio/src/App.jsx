/* eslint-disable no-unused-vars */
// App.js or your main component
import React, { useEffect, useState } from 'react';
import Intro from './components/Intro';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Info from './components/Info';
import Header from './components/Header';
import SplashScreen from './components/SplashScreen';

function App() {
    const [activeSection, setActiveSection] = useState('intro');
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3 // Adjust this value if necessary
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

    const handleSplashEnd = () => {
        setShowSplash(false);
    };

    return (
        <div>
            {showSplash ? (
                <SplashScreen onAnimationEnd={handleSplashEnd} />
            ) : (
                <>
                    <Header activeSection={activeSection} />
                    <section id="intro"><Intro /></section>
                    <section id="about"><About /></section>
                    <section id="techstack"><TechStack /></section>
                    <section id="projects"><Projects /></section>
                    <section id="info"><Info /></section>
                </>
            )}
        </div>
    );
}

export default App;
