var React = require('react');
var ReactRouter = require('react-router');//react router library 
var HashHistory = require('react-router/lib/hashhistory');//hashhistory is an object that tells the router 
														//how we will be keeping track of what page the user 
														//is on any given time. 

var Router = ReactRouter.Router;//will decide what content to show on the page at any given time 
var Route = ReactRouter.Route;//used to configure the router 
var Main = require('./components/Main');
var Topic = require('./components/Topic');
var ImageDetail = require('./components/image-detail')

module.exports =(
	<Router history={new HashHistory}>
		<Route path="/" component={Main}>
			<Route path="topics/:id" component={Topic}/>
			<Route path="images/:id" component={ImageDetail}/>
		</Route>
	</Router>
)