exports.handler = async (event, context) => {
  console.log(event);
  const { key } = process.env;
  const term = event.queryStringParameters.search;

  const shazam = require('./shazam/search');
  const response = await shazam.search(term, key);

  return {
    statusCode: 200,
    body: JSON.parse(response.data)
  };
};