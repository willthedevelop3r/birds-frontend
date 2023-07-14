import React from 'react';
import bgImage from '../assets/sky.jpg';
import './Background.css';

const BackgroundImage = () => {
  return (
    <div className='background-div'>
      <img src={bgImage} className='background-img' alt='background' />
    </div>
  );
};

export default BackgroundImage;
