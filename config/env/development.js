var port = 80;
//sudo PORT=80 npm start

module.exports = {
	port: port,
	db: 'mongodb://localhost/pickem',
  root: '/Users/user/Sites/yahoo-fantasy/',

  sessionsecret: 'secret_ok',
  tokensecret: 'token_ssh',

  yahooapp: {
    key: 'alkdfjaldkfjalkjd--',
    secret: 'ladfjalkdfjalsdkfjalkljlkjl',
    gameid: 360,
    leagueid: 90210,
    callback: 'http://machine.local/login/callback'
  }
};
