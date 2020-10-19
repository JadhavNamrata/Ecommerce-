var express = require('express');

var app = express();

app.use(function(req,res,next){
    console.log("in logging middleware");
    next();
});

app.use(function(req,res,next){
    console.log("in encrypt - decrypt middleware");
    next();
});

app.all('/*',function(req,res){

    res.send("sorry,Invalid URL");
});

app.get('/home',function(req,res){
    res.send("Home Page");
});

app.listen(8000,function(){
    console.log("server started at port 8000.");
});

