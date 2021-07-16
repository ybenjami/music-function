exports.handler = async (event, context) => {
  console.log(event);
  const { key } = process.env;
  const params = event.queryStringParameters.search;

  console.log(params);
 // const shazam = require('./shazam/search');
  //const data = await shazam.search(params.search, key);
 // console.log('returned data ', data);
  return {
    statusCode: 200,
    body: params
  };
};