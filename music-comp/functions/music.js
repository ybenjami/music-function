exports.handler = async (event, context) => {
  const { key } = process.env;
  const term = event.queryStringParameters.search;

  const shazam = require('./endpoint/search.js');
  return await shazam.search(term, key);
};