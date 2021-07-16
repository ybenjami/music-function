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
        resolve({status: 200, body: response.data})
     }).catch(function (error) {
         console.log('axios error', error.response.data);
         resolve({status: 500, body: error.response.data})
     });
    })
  }
  
  module.exports = {search};