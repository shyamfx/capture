import React from 'react';
import home1 from '../img/home1.png';

const AboutSection = () => {
  return (
    <div>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2>Welcome to make</h2>
          </div>
          <div className='hide'>
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className='hide'>
            <h2>true.</h2>
          </div>
        </div>
        <p>Contact me for any photography or videography ideas that you have. I have the expertise with amazing skills to help you.</p>
        <button>Contact Me</button>
        <img src={home1} alt='Kiru with a camera' />
      </div>
    </div>
  );
};

export default AboutSection;
