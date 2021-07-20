const axios = require("axios");
const search = async (q, key)=> {

    var options = {
      method: 'GET',
      url: 'https://genius.p.rapidapi.com/search',
      params: {q},
      headers: {
        'x-rapidapi-key': `${key}`,
        'x-rapidapi-host': 'genius.p.rapidapi.com'
      }
    };
     
    return new Promise((resolve, reject)=>{
      axios.request(options).then((response) => {
        console.log('axios response', response.data);
        resolve({statusCode: 200, body: JSON.stringify(response.data)})
     }).catch(function (error) {
         console.log('axios error', error.response.data);
         resolve({statusCode: 500, body: JSON.stringify(error.response.data)})
     });
    })
  }
  
  module.exports = {search};