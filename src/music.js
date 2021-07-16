exports.handler = async (event, context) => {
  console.log(event);
  const { key } = process.env;
  const term = event.queryStringParameters.search;

  console.log('search tearm', term);
  const shazam = require('./shazam/search');
  const response = await shazam.search(term, key);
  console.log('returned data ', data);
  return {
    statusCode: 200,
    body: JSON.parse(response.data)
  };
};