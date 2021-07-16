
exports.handler = async (event, context) => {
  const { key } = process.env;
  const querystring = require("querystring");
  const params = querystring.parse(event.body);
  const shazam = require('./shazam/search.js');
  const data = await shazam.search(params.search, key);
  return {
    status: 200,
    data
  }
};