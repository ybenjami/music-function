exports.handler = async (event, context) => {
  console.log(event);
  const { key } = process.env;
  const querystring = require("querystring");
  const params = querystring.parse(event.queryStringParameters);

  console.log(params);
 // const shazam = require('./shazam/search');
  //const data = await shazam.search(params.search, key);
 // console.log('returned data ', data);
  return {
    statusCode: 200,
    body: JSON.stringify(params)
  };
};