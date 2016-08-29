var config = require('./config');
//var express = require('express');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);

module.exports = function(app)
{
  //var app = express();

  var store = new MongoDBStore(
  {
    uri: config.db,
    collection: 'sessions'
  });

  // Catch errors
  store.on('error', function(error)
  {
    console.log('I am session error.');
    assert.ifError(error);
    assert.ok(false);
  });

  app.use(session({
    secret: config.sessionsecret,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 1 //1 week
    },
    saveUninitialized: false,
    resave: false,
    store: store
  }));

  /*  --------------------------------------------------------------
   *  session-centric routes (sesh testing)
   */
  app.get('/sesh/load', function(req, res)
  {
    req.session.fart = 'stinky';
    req.session.guts = {'small intestine':'cake', 'large intestine':'tuna sandwich'};
    req.session.guts.colon = 'dookie';
    //console.log( req.session );
    console.log('req.session:\n', JSON.stringify(req.session));
    res.send('Check console for req.session');
  });

  app.get('/sesh/view', function(req, res)
  {
    console.log('req.session:\n', JSON.stringify(req.session));
    res.send('Check console for req.session');
  });

  /*  ----------------------------------------------------------  */
  console.log('The session config has run.');

  return store;
  //return app;
};

