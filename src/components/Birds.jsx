import React, { useState, useEffect } from 'react';
import { fetchBirdList } from '../utils/api';

const Birds = () => {
  const [birds, setBirds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBirds = () => {
    fetchBirdList()
      .then((data) => {
        setBirds(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch bird data:', error);
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBirds();
  }, []);

  if (error) return <div>Error loading bird data.</div>;

  return (
    <div className='flex flex-col items-center mb-8 px-4 sm:px-8'>
      <div className='mt-16 bg-white shadow-lg rounded-lg overflow-hidden p-4 max-w-xl w-full'>
        <h3 className='text-center font-bold text-2xl'>BIRDS</h3>
        {loading ? (
          <div className='text-center'>Loading...</div>
        ) : (
          <ul className='text-center sm:text-lg'>
            {birds.map((bird, index) => (
              <li key={index}>{bird.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Birds;
