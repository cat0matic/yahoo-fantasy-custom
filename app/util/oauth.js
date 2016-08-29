/*  ----------------------------------------------------------------
 *  library
 */
var config = require('../../config/config');
const OAuth = require("oauth");

/*console.log('--------------------------------------------------------');
console.log( config.app.key );
console.log( config.app.secret );
console.log('--------------------------------------------------------');*/


/*  ----------------------------------------------------------------
 *  portable auth object
 */

/*  oauth: init/config
 */
var oa = new OAuth.OAuth(
  'https://api.login.yahoo.com/oauth/v2/get_request_token',
  'https://api.login.yahoo.com/oauth/v2/get_token',
  config.yahooapp.key,
  config.yahooapp.secret,
  '1.0',
  'http://jota.local/login/callback',
  'HMAC-SHA1'
);
console.log('oAuth init complete');

/*  oauth: get request token
 */
oa.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results)
{
  if(error) console.log('error :' + JSON.stringify(error));
  else {
    console.log('oauth_token :' + oauth_token)
    console.log('oauth_token_secret :' + oauth_token_secret)
    console.log('requestoken results :' + util.inspect(results))
    console.log("Requesting access token")
    oa.getOAuthAccessToken(oauth_token, oauth_token_secret, function(error, oauth_access_token, oauth_access_token_secret, results2) {
      console.log('oauth_access_token :' + oauth_access_token)
      console.log('oauth_token_secret :' + oauth_access_token_secret)
      console.log('accesstoken results :' + util.inspect(results2))
      console.log("Requesting access token")
      var data= "";
    });
  }
});
console.log('oAuth token granted (yes?)');

/*
var url = 'http://fantasysports.yahooapis.com/fantasy/v2/league/'+config.app.leagueId;
  yield: error.description = Invalid game key provided - 96625
var url = 'http://fantasysports.yahooapis.com/fantasy/v2/game/nfl';
  yield: Game (key, id, name, code, type, url, season, registrationOver_bool)

var url = 'http://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1/games;game_keys=nfl/teams';
var url = 'http://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1/games;game_keys=57,49,79,101,124,153,175,199,222,242,58,62,78,102,125,154,176,200,223/leagues';
var url = 'http://fantasysports.yahooapis.com/fantasy/v2/game/349/leagues;league_keys=349.l.48538'
*/
/*
var url = 'http://fantasysports.yahooapis.com/fantasy/v2/leagues;league_keys=357.l.96625';
oa.getProtectedResource(
  url,
  "GET",
  oauth_access_token,
  oauth_access_token_secret,
  function (error, data, response)
  {
    console.log(data);
  }
);
*/
/*  ------------------------------------------------------------  */
module.exports = oa;


