/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

var path = require("path");

var express = require('express');
var app = express(); // create a new express server

var cfenv = require('cfenv'); // cfenv provides access to your Cloud Foundry environment
var appEnv = cfenv.getAppEnv(); // get the app environment from Cloud Foundry

var exphbs  = require('express-handlebars');
var hbs = require('./public/js/helpers')(exphbs); //get handlebar engine with helpers

// var lessmiddle = require("less-middleware");

var sassmiddle = require("node-sass-middleware");

app.set('views', __dirname + '/public/views'); //set views folder
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

// app.use(lessmiddle('/less', {
// 	dest: '/css',
// 	pathRoot: path.join(__dirname, 'public'),
// 	// force: true //compiles every request - only for dev
// })); // compile less

app.use(sassmiddle({
	src: __dirname + '/public/scss',
	dest: __dirname + '/public/css',
	debug: true
}));

app.use(express.static(path.join(__dirname, 'public'))); // serve the files out of ./public as our main files

require('./routes')(app); //routes

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
	// print a message when the server starts listening
	console.log("server starting on " + appEnv.url);
});
