//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var app = express(); 

// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
 var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//Initiallising connection string
var sql = mysql.createConnection({
  host     : 'xx.xx.xx.xx',
  user     : 'x',
  password : 'xxxxxxx',
  database : 'mydatabase'
});

//Function to connect to database and execute query
var  executeQuery = function(res, query){             
     sql.connect();
     sql.query(query, function (err, results, fields) {
                           if (err) {
                                      console.log("Error while querying database :- " + err);
                                      res.send(err);
                                     }
                                     else 
									 {
                                      res.send(results);
                                     }
                               }); 
};

//GET API
//app.get("/api//:card/", function(req , res){
app.get("/api/sqlname/", function(req , res){
	            var query = 'select * from tablex';
//                var query = 'select count(BDGNO) as USEROK from [USER_BADGES] where BDGNO = ' + req.params.card;
                executeQuery (res, query);
});

//POST API
// app.post("/api/user", function(req , res){
//                var query = "INSERT INTO [user] (Name,Email,Password) VALUES (req.body.Name,req.body.Email,req.body.Password”);
//                executeQuery (res, query);
//});

//PUT API
// app.put("/api/user/:id", function(req , res){
//                var query = "UPDATE [user] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
//                executeQuery (res, query);
//});

// DELETE API
// app.delete("/api/user /:id", function(req , res){
//                var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
//                executeQuery (res, query);
//});