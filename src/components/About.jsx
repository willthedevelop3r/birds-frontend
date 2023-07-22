import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='flex flex-col items-center mb-8 px-4 sm:px-8'>
      <div className='mt-16 bg-white shadow-lg rounded-lg overflow-hidden p-4 max-w-xl w-full'>
        <h3 className='text-center font-bold text-2xl'>ABOUT</h3>
        <p className='text-center sm:text-lg'>
          Bird Generator was born out of my passion for learning about birds and
          sharing that excitement with others. As an educational tool, it allows
          me to delve into the avian realm and explore a vast array of bird
          species in America. The concept is simple: with just a click of a
          button, Bird Generator presents you with random bird species,
          accompanied by interesting and informative facts about each one. It's
          a fun and engaging way to immerse yourself in the captivating world of
          birds, whether you're an experienced birdwatcher or just starting to
          discover the wonders of ornithology. I sincerely hope that Bird
          Generator sparks your curiosity and encourages you to appreciate the
          beauty and diversity of birds as much as it has for me. Join me on
          this journey of discovery, and let's celebrate the wonders of nature,
          one bird at a time. Thank you for being a part of this educational
          adventure, and happy birding!
        </p>
      </div>
      <Link
        to='/generate' // Specify the path to navigate to
        className='mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Generate Bird
      </Link>
    </div>
  );
};

export default About;
