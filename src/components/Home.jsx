import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col items-center mt-[60px] mb-8 px-4 sm:px-8'>
      <div className='mt-16 bg-white shadow-lg rounded-lg overflow-hidden p-4 max-w-xl w-full'>
        <h3 className='text-center font-bold'>WELCOME TO BIRD GENERATOR!</h3>
        <p className='text-center'>
          This is a fun and educational tool that allows you to generate random
          bird species along with interesting facts about them. Click the button
          below, generate a bird, and let the adventure begin! Happy birding!
        </p>
        {/* <p className='text-center'>
          Whether you are a bird enthusiast or just curious about the avian
          world, Bird Generator is the perfect way to explore and discover
          various bird species. Each generated bird comes with a beautiful image
          and a set of intriguing facts to keep you engaged and informed.
        </p> */}
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

export default Home;
