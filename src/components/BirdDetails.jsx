import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { read } from '../utils/api';

const BirdDetails = () => {
  const { birdId } = useParams();
  const [bird, setBird] = useState(null);
  const [error, setError] = useState(null);

  const fetchBird = () => {
    read(birdId)
      .then((data) => {
        setBird(data.data);
      })
      .catch((error) => {
        console.error('Failed to fetch bird details:', error);
        setError(error);
      });
  };

  useEffect(() => {
    fetchBird();
  }, []);

  let attributionText = bird?.attribute || '';
  let attributionLink = '';
  let ccVersion = '';
  let licenseType = '';

  if (bird?.attribute?.includes('<')) {
    const attribution = bird.attribute.split('<');
    attributionLink = attribution[1]?.split('>')[0];
    const ccParts = attribution[0].split(/CC BY-SA|CC BY/);
    attributionText = ccParts[0];
    ccVersion = ccParts[ccParts.length - 1].trim();
    licenseType = attribution[0].includes('CC BY-SA') ? 'SA' : '';
  }

  if (error) return <div>Error loading bird details.</div>;
  if (!bird) return <div>Loading...</div>;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-4'>
      <img
        className='object-contain h-64 sm:h-96 w-full block mt-2 sm:mt-4'
        src={bird.image_url}
        alt={bird.name}
      />
      <div className='mt-2 sm:mt-4 bg-white shadow-lg rounded-lg overflow-hidden p-4 max-w-xl w-full'>
        <h2 className='font-bold'>{bird.name}</h2>
        <p>{bird.description}</p>
        <p>
          <span className='text-sm'>{attributionText}</span>
          {attributionLink && (
            <>
              <a
                className='text-sm text-blue-500 hover:text-blue-800'
                href={attributionLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                CC BY{licenseType && '-'}
                {licenseType}
                {ccVersion && ` ${ccVersion}`}
              </a>
              {bird.page_url && <span>, </span>}
            </>
          )}
          {bird.page_url && (
            <a
              className='text-sm text-blue-500 hover:text-blue-800 break-words'
              href={bird.page_url}
              target='_blank'
              rel='noopener noreferrer'
            >
              Copyright Info
            </a>
          )}
        </p>
      </div>
    </div>
  );
};

export default BirdDetails;
