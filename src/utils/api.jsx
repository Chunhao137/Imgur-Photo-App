//handles all the ajax calls to our apis
var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '2d204ae9224791f'; //Client ID

module.exports = window.api= {
	get: function(url){
		return fetch(rootUrl +url, {
			headers:{
				'Authorization':'Client-ID ' + apiKey
			}
		})
		.then(function(response){
			return response.json();
		})
	}
};