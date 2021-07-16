
exports.handler = async (event, context) => {
  const { key } = process.env;
  const querystring = require("querystring");
  const params = querystring.parse(event.body);
  const search = require('./shazam/search.js').search;
  return await search(params.search, key);
};