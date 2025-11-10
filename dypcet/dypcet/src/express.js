 var express = require('express');
 var app = express();
 app.get('/', function(req, res){
 console.log(req.app);
 res.send("Hello world!");
 });
 app.listen(3000);