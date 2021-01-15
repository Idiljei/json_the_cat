const request = require('request'); //request from library




const fetchBreedDescription = function(breedName, callback) { //callback is (error, description)

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error,response, body) => {
    if (error) {
      callback(error,null);
      
    }
    const data = JSON.parse(body); //turns body into object so we can call it

    if (data.length === 0) {  //if breed is not found
      callback('Breed not found', null);
    } else {
      callback(null, data[0].description); //if it is a success its passing the datas description
    }
  
  });

};




module.exports = {fetchBreedDescription};