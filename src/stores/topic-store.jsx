var API = require('../utils/api');
var Reflux = require('reflux');
var Actions =require('../actions')

//use flux for our store: responsible for fetching and storing our data
module.exports  = Reflux.createStore({
	listenables: [Actions],
	getTopics:function(){
		return API.get('topics/defaults')
			.then(function(json){
				this.topics = json.data;
				this.triggerChange()
			}.bind(this));
	},
	triggerChange:function(){
		//trigger is provided to us by reflux
		//first argument emits a change event, second argument is the info we want to share with
		//all the components
		this.trigger('change', this.topics);
	}
});