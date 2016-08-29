DIY Yahoo! Fantasy Custom Interface System
====================

Extracts data from a fantasy game and allows you to have it on your own server.

Originally intended for the purpose of making NFL picks from a web site other than yahoo.com.  Has the potential to be used for other Fantasy Games.

Runs with Node.js. It's a mashup of an [MVC tutorial Hitman666](https://github.com/Hitman666/MEAN_MVC_3rdTutorial) and a [Yahoo! Fantasy Sports app](https://github.com/whatadewitt/fantasyapp).

General outline:
* Use oAuth to get into the Yahoo! API
* Make your picks from your own web server

To do:
* See picks from the general population
* Make it work
* Display league transactions
* Extricate the node 'fantasysports' module from util/ (why is it like that?)

Caveats:
* As of Fall 2016, doesn't appear that it can work with NFL Pick 'Em, unless the API is changed.

* Yahoo! API only allows callback URLs to port 80. As this entire app runs off of that API, you have to start the node app like this: ```sudo PORT=80 npm start```