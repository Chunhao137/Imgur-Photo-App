var Reflux = require('reflux');
var API = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
	listenables: [Actions],
	getImage:function(id){
		API.get('gallery/'+ id + '/comments')
		.then(function(json){
			this.comment = json.data;
			this.triggeChange();
		}.bind(this))
	},
	triggeChange:function(){
		this.trigger('change', this.comment)
	}
})

