const request = require('request'); //request from library

const cats = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${cats[0]}`; //just first argument

request(url, (error, response, body) => { // when you send request either success or failure
  if (error) {
    console.log('error');
    return;
  }
  const data = JSON.parse(body)[0];
  if (data) {
    console.log(data.description);
    // console.log(typeof data);
  }

  if (!data) {
    console.log('Breed is not found');
  }

});
