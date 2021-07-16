exports.handler = async (event, context) => {
  const { key } = process.env;
  const querystring = require("querystring");
  const params = querystring.parse(event.body);
 // const shazam = require('./shazam/search');
  //const data = await shazam.search(params.search, key);
 // console.log('returned data ', data);
  return {
    statusCode: 200
  };
};