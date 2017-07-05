// Create component
// this only required hash value required is
// the render function.
// when returning your html you must only have one root
// element, otherwise it wont work
var React = require('react');
var ReactDOM = require('react-dom');

// es6 destructuring feature:
// shortcut:
// var {Route, Router, IndexRoute, hashHistory } = require('react-router');
// long way:
// var Route = require('react-router').Route
// var Router = require('react-router').Router
// var IndexRoute = require('react-router').IndexRoute
// var hashHistory = require('react-router').hashHistory

var {Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={About}/>
			<Route path="examples" component={Examples}/>
			<IndexRoute component={Weather}/>
	  </Route>
	</Router>,
	document.getElementById( 'app' )
);
