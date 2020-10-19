	var express=require('express');
	
	var app = express();
	
	app.get('/login/:user/:password',function(req,res){
		var user = req.params.userid;
		var pass = req.params.password;
		
		if(user=='object' && pass=='knowit')
		{
			res.send('sucessful login');
		}
		else
		{
			res.send('failed login');
		}
	});
	
	app.all('/*',function(){
		res.send("<h1> WelCome in Express App</h1> Please Enter Your URL...");
	});
	
	app.listen(7000);
	 
	console.log("server running on port 7000"); 