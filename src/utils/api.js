function generateBird() {
  return fetch('http://localhost:5000/birds/generate', {
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
