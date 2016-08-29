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
app.get('/league', api.render_league);
app.get('/teams', api.render_teams);
app.get('/user', api.render_user);
 */
exports.render_league = function(req, res)
{
  console.log('welcome.render_league');

  /*
  url = 'http://fantasysports.yahooapis.com/fantasy/v2/leagues;league_keys=357.l.96625'
  fantasy.
  */
  res.send('league info');
}

exports.render_teams = function(req, res)
{
  var url = 'http://fantasysports.yahooapis.com/fantasy/v2/users;';
  //url+= 'use_login=1/games;game_keys=mlb/leagues?format=json';
  url+= 'use_login=1/games;game_keys=nflp/leagues?format=json';

  fantasy
  .request(req, res)
  .api( url )
  .done(function(data)
  {
    res.json(data);
    /*
    var leagueData = data.fantasy_content.users[0].user[1].games[0].game[1].leagues;
    var leagues = [];

    _.each(leagueData, function(value)
    {
      if( value.league ) leagues.push(value.league[0]);
    });

    res.json(leagues);
    */
  });
}

exports.render_user = function(req, res)
{
  fantasy
  .request(req, res)
  //.api('http://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1?format=json')
  //.api('http://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1/games;game_keys=mlb,nfl,nflp/leagues?format=json')
  .api('http://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1/games?format=json')
  .done(function(data)
  {
    console.log(data);
    res.send('check console for user info');
    //res.json(data);
    /*
{"fantasy_content":{"xml:lang":"en-US","yahoo:uri":"/fantasy/v2/users;use_login=1",
"users":{"0":{"user":[{"guid":"NUZZS43JMFKUCHPPNHNU55DYSA"}]},"count":1},
"time":"23.285865783691ms","copyright":"Data provided by Yahoo! and STATS, LLC","refresh_rate":"31"}}
    */

    /*
    var leagueData = data.fantasy_content.users[0].user[1].games[0].game[1].leagues;
    var leagues = [];

    _.each(leagueData, function(value)
    {
      if( value.league ) leagues.push(value.league[0]);
    });

    res.json(leagues);
    */
  });
}

/*
transactions:
http://fantasysports.yahooapis.com/fantasy/v2/league/223.l.431/transactions



/*  ----------------------------------------------------------------
 */
