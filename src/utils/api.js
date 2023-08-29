const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : process.env.REACT_APP_DATABASE_URL;

export async function generateBird() {
  return fetch(baseURL + '/birds/generate', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    });
}

export async function fetchBirdList() {
  return fetch(baseURL + '/birds', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    });
}

export async function read(birdId) {
  return fetch(`${baseURL}/birds/${birdId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    });
}

export async function getSignedImageUrl(imageName) {
  return fetch(`${baseURL}/image/${imageName}`)
    .then((response) => response.url)
    .catch((error) => {
      console.error('Error fetching signed URL:', error);
    });
}
