import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen mb-8 px-4 sm:px-8'>
      <div className='bg-white shadow-lg rounded-lg overflow-hidden p-4 max-w-xl w-full'>
        <h3 className='text-center font-bold text-2xl'>
          WELCOME TO BIRD GENERATOR!
        </h3>
        <p className='text-center sm:text-lg'>
          This is a fun and educational tool that allows you to generate bird
          species along with interesting facts about them. Click the button
          below, generate a bird, and let the adventure begin! Happy birding!
        </p>
      </div>
      <Link
        to='/generate'
        className='mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Generate Bird
      </Link>
    </div>
  );
};

export default Home;
