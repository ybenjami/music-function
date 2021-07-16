
exports.handler = async (event, context) => {
  const { key } = process.env;
  const querystring = require("querystring");
  const params = querystring.parse(event.body);
  const search = require('./shazam/search.js').search;
  const data = await search(params.search, key);
  return data;
};