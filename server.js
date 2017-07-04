var express = require( 'express' );
var port = 3000;


// Create our app
var app = express();

app.use( express.static( 'public' ) );

app.listen( port, function() {
	console.log( 'Express server is up on port ' + port );
});