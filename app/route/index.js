//  controllers accessible from root
var welcome = require('../control/welcome');
var api = require('../control/api');

module.exports = function(app)
{
  app.get('/', welcome.render_index);

  app.get('/login', welcome.login);
  app.get('/login/callback', welcome.login_callback);

  //app.get('/update/:team?', team.update);

  app.get('/league', api.render_league);
  app.get('/teams', api.render_teams);
  app.get('/user', api.render_user);


};


