	var express = require('express');
	var app = express();

	app.get('*',function(req,res){
		res.send("Sorry,this URL is Invalid...");
	});
	app.listen(4000);