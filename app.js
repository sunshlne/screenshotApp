var $ = require('jquerygo');
var async = require("async");
var prompt = require('prompt');

prompt.start();

$.visi= function(website, done){
async.series([
	$.go('visit', website)
	], done);
};



prompt.get(['site'],function(err,result){
async.series([
$.go('visi', result.site)
	],function(){
			console.log("we are now taking a screenshot");
			$.capture(result.site + '.png');
			$.close();
	});

});

