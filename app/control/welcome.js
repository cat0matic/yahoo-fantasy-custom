/*  ----------------------------------------------------------------
 *  library
 */
var config = require('../../config/config');

//const util = require('util');
const _ = require('underscore');
//var oa = require('../util/oauth.js');
var fantasy = require('../util/fantasy.js');

//var session = require('express-session');
//var MongoDBStore = require('connect-mongodb-session')(session);


/*  ----------------------------------------------------------------
 */
exports.render_index = function(req, res)
{
  console.log('welcome.render_index');
  console.log('req.session:\n', JSON.stringify(req.session) );
  //console.log('[%s / %s]', req.session.oauthToken, req.session.oauthVerifier );
  /** /
  oauthToken: 'basku9f',
  oauthTokenSecret: 'cda80045d718cc869a62cf3930026edbd9e7c6a0',
  oauthVerifier: 'ngupyg',
  oauthAccessToken: 'A=676s0P7c5xpQStAjFF4iQ0DBPOeGR2SeQCKjhjZBxsmUhH5mo8m1DRhtqMigbWd0o65V8.MWH.2TJAwE10weeSsMLqvtEJsbMdpg0dZ9SnIatNhKQFKVE9CgW9vjPIcRKoymjKV08SfEWnySmIf2me.YZrcRPTdXoyaUWVtOjRZ92JMhOFD1LzgzsFMwaa0ViOmoujsVsqO1jr0hvJu4VINYcJsq4OZPb6nj8SoLo80Hz34Cityc9l_QKVgADOS31eoA9C8NRL_VPuEc3ydSakfi8y19fa_JMp0uq7uyHhkQoNRIw3yreoGTcYVZ..pb0x__jP.cP26SDSSm9CxDygHQRHiNwdeTLbkuA5GvWBjvSuY5lmbiGrOwL3COTUhTRj6ll46A2oeTVhquLqUyvqXg7J6E0kreL5BHUrFivrkR3ktfJPLT7Iy28XGHUL0wyMPGGriSHejWLhrNz5Vp9LSD4d8Yn3zTHkfIMyp9sulzX5P4VKhb8LKa_lZ4MNXm86Bi6CQgO1MHoe7UcEy53v.aDQix86jFhCBktpGmOB6pYgBrzehXJIWkr1NUw6ByjMmND7Fc1L2yLEUOyFHC3CAiSRlxHXPpMIvNJCHlFKZuC1N0FpnkcsVxUrKuubAk45zmv8VBgq2v_JVeCve2UTWlYPhEprOZmFOtcLyVYjqZD_Ti.Lu.xE5OXEhERBGB1szbivYCWX0k021jZnBa9BMJplHkJTGfyXYT9P4YM5xDMv9YZyI8FfZqa27Ul6aQd5HDSGxGJRqxUteDMjoeN8_99gmIi4ikhe3JTRSu',
  oauthAccessTokenSecret: '94a0b5bd53576f7bc0502e45c1510d51631e6f85',
  timestamp: '2016-05-15T17:33:37.975Z',
  oauthSessionHandle: 'AC3xNFcs_hfMHWvy1JeMvqlqrPiTFtcQYa2vgfN8iDV2kQCAVbbu',
  xoauthYahooGuid: 'NUZZS43JMFKUCHPPNHNU55DYSA'
  /**/
  res.render('welcome/portal', {
    title: 'Welcome: welcome'
  });
};


/*  ----------------------------------------------------------------
 *  logging in, saving auth?
 */
exports.login = function(req, res)
{
  console.log('welcome.login');
  fantasy.startAuth(req, res);
  //res.send('Welcome!  Please log in.');
}

exports.login_callback = function(req, res)
{
  console.log('welcome.login_callback');
  //?oauth_token=b8aas98&oauth_verifier=nynayv

  //req.session.oauthToken =
  //req.session.oauthVerifier );

  console.log('req.params:\n', JSON.stringify(req.params));
  //req.session.fart = 'stinky';
  console.log('req.session:\n', JSON.stringify(req.session));

  fantasy.endAuth(req, res);
  //res.send('You have logged in! (i guess)');
}

/*  ----------------------------------------------------------------
 *  helpers
 */








/*  ----------------------------------------------------------------
 */
