const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : process.env.REACT_APP_DATABASE_URL;

function generateBird() {
  // const baseURL =
  //   process.env.NODE_ENV === 'development'
  //     ? 'http://localhost:5000'
  //     : process.env.REACT_APP_DATABASE_URL;

  return fetch(baseURL + '/birds/generate', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function fetchBirdList() {
  return fetch(baseURL + '/birds', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

module.exports = {
  fetchBirdList,
  generateBird,
};
