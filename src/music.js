

exports.handler = async (event, context) => {
  const { key } = process.env;
  const querystring = require("querystring");
  
  const axios = require("axios");
  const params = querystring.parse(event.body);
  const searchString = params.search;

  let data = '';

  var options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/search',
    params: {term: searchString, locale: 'en-US', offset: '0', limit: '5'},
    headers: {
      'x-rapidapi-key': key,
      'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
     data = response.data;
  }).catch(function (error) {
      data = error;
  });

  return {
    statusCode: 200,
    body: data,
  };
};




