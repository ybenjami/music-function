const axios = require("axios");
const search = async (term, key)=> {

   console.log('term ', term);
    var options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/search',
      params: {term, locale: 'en-US', offset: '0', limit: '5'},
      headers: {
        'x-rapidapi-key': `${key}`,
        'x-rapidapi-host': 'shazam.p.rapidapi.com'
      }
    };
    
    
    const response = await axios.request(options).then((response) => {
       console.log('axios response', response);
       return response;
    }).catch(function (error) {
        console.log('axios error', error);
        return error;
    });
     return response;
  }
  
  module.exports = {search};