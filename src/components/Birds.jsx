import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBirdList } from '../utils/api';

const Birds = () => {
  const [birds, setBirds] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBirds = () => {
    fetchBirdList()
      .then((data) => {
        setBirds(data.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Failed to fetch bird data:', error);
        setError(error);
        setLoading(false); // Set loading to false in case of an error
      });
  };

  useEffect(() => {
    fetchBirds();
  }, []);

  if (error) return <div>Error loading bird data.</div>;
  if (loading) return <div>Loading...</div>; // Show "Loading..." while fetching data

  return (
    <div className='flex flex-col items-center mb-8 px-4 sm:px-8'>
      <div className='mt-16 bg-white shadow-lg rounded-lg overflow-hidden p-4 max-w-xl w-full'>
        <h3 className='text-center font-bold text-2xl'>BIRDS</h3>
        <ul className='text-center sm:text-lg'>
          {birds.map((bird, index) => (
            <li key={index}>
              <Link
                to={`/birds/${bird.id}`}
                className='text-blue-500 hover:text-blue-800'
              >
                {bird.name}
              </Link>{' '}
              {/* Link to the BirdDetails page */}
            </li>
          ))}
        </ul>
      </div>
      <Link
        to='/generate'
        className='mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded'
      >
        Generate Bird
      </Link>
    </div>
  );
};

export default Birds;
