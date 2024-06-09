/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './SplashScreen.css';

// eslint-disable-next-line react/prop-types
const SplashScreen = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="splash-container">
      <div className="hexagon">
        <div className="letter">A</div>
      </div>
    </div>
  );
};

export default SplashScreen;
