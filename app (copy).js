var $ = require('jquerygo');
var async = require("async");
var prompt = require('prompt');

prompt.start();

$.visi= function(website, done){
async.series([
	$.go('visit', website)
	], done);
};




async.series([
$.go('visi', 'http://www.google.com')
	],function(){
			console.log("we are now taking a screenshot");
			$.capture('name.png');
			$.close();
	});
