const request = require('request');
const search = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, response, body) => {
  if (error) {
    console.log('Invalid URL');
    return;
  }
  const data = JSON.parse(body);
  const breed = data[0];
  if (!breed) {
    console.log('breed not found');
    return;
  }
  console.log(data[0].description);
});






