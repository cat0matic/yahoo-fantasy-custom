var express = require('express');
var bodyParser = require('body-parser');

module.exports = function()
{
  var app = express();

  /*  --------------------------------------------------------------
   *  general shite
   */
  //  static files
  app.use(express.static('./asset'));

  /*  --------------------------------------------------------------
   *  session config (must come before routes?)
   */
  require('./session')(app);
  /*
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'SuperSecretCookieSecret'
  }));
  */

  /*  --------------------------------------------------------------
   *  syntactic analysis of data submitted in request body
   */
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));//  dumb jay likes false

  /*  --------------------------------------------------------------
   *  routes
   */
  //  root
  require('../app/route/index')(app);

  //  modular
  //app.use('/hr', require('../app/route/hr')(app));

  /*  --------------------------------------------------------------
   *  oAuth homeroll
   */
  //require('../app/util/oauth');

  /*  --------------------------------------------------------------
   *  views
   */
  app.set('views', './app/view');

  /*  --------------------------------------------------------------
   *  ECT
   */
  var ECT = require('ect');
  var ectRenderer = ECT({
    watch: true,
    root: __dirname+'/../app/view/',
    ext: '.ect',
    open: '<?',
    close: '?>'
  });
  app.set('view engine', 'ect');
  app.engine('ect', ectRenderer.render);


  /*  --------------------------------------------------------------
   */
  return app;
};