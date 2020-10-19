	var express = require('express');
	var app = express();

	app.get('/greet',function(req,res)
	{
		res.send("Welcome to my Web App....");
	});
	
	app.all('/*',function(req,res){
		res.send("<h> Welcome in Express App</h> Please Enter Your URL....");
	});
	app.listen(8000);
	 
	console.log("server running on port 8000"); 