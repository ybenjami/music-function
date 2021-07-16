const axios = require("axios");

exports.handler = async (event, context) => {
  const { key } = process.env;
  const querystring = require("querystring");
  
  
  const params = querystring.parse(event.body);

  const data = await search(params.search, key);
  return data;

 
};

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
  
  axios.request(options).then(function (response) {
     return response.data;
  }).catch(function (error) {
      return error;
  });
}



