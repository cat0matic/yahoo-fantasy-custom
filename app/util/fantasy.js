var config = require('../../config/config');
const fantasy = require('./fantasysports/');


fantasy.options({
  'accessTokenUrl': 'https://api.login.yahoo.com/oauth/v2/get_request_token',
  'requestTokenUrl': 'https://api.login.yahoo.com/oauth/v2/get_token',
  'oauthKey': config.yahooapp.key,
  'oauthSecret': config.yahooapp.secret,
  'version': '1.0',
  'callback': config.yahooapp.callback,
  'encryption': 'HMAC-SHA1'
});


/*  ------------------------------------------------------------  */
module.exports = fantasy;
