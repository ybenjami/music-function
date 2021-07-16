const axios = require("axios");
const search = async (term, key)=> {
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
       return response.data;
    }).catch(function (error) {
        return error;
    });
     return response;
  }
  
  module.exports = {search};