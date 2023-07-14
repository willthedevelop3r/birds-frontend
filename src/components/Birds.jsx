import React, { useState, useEffect } from 'react';
import generateBird from '../utils/api';

const Birds = () => {
  const [bird, setBird] = useState(null);
  const [error, setError] = useState(null);

  const fetchBird = () => {
    generateBird()
      .then((data) => {
        setBird(data.data);
      })
      .catch((error) => {
        console.error('Failed to fetch bird data:', error);
        setError(error);
      });
  };

  useEffect(() => {
    fetchBird();
  }, []);

  if (error) return <div>Error loading bird data.</div>;
  if (!bird) return <div>Loading...</div>;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-4'>
      {bird.image_url && (
        <img
          className='object-contain h-64 sm:h-96 w-full block mt-2 sm:mt-4'
          src={bird.image_url}
          alt={bird.name}
        />
      )}
      <div className='mt-2 sm:mt-4 bg-white shadow-lg rounded-lg overflow-hidden p-4 max-w-xl w-full'>
        <h2>{bird.name}</h2>
        <p>{bird.description}</p>
        <p>{bird.attribute}</p>
      </div>
      <button
        className='mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={fetchBird}
      >
        Generate Bird
      </button>
    </div>
  );
};

export default Birds;
