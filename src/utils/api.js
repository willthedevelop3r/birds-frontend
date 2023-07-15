require('dotenv').config();

function generateBird() {
  return fetch(process.env.REACT_APP_DATABASE_URL + '/birds/generate', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

module.exports = generateBird;
