var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const mysql = require('mysql');
var app = express();
var path = require('path');

var view = require("./cricket.js");
app.use('/', express.static(path.join(__dirname,'public')));

app.use(cors());
app.use(bodyParser.json());



app.use(bodyParser.json());
app.get('/first', function(req, res) {
    res.sendFile(path.join(__dirname)+'/public/first.html');
});

app.get('/second', function(req, res) {
    res.sendFile(path.join(__dirname)+'/public/second.html');
});

app.get('/third', function(req, res) {
    res.sendFile(path.join(__dirname)+'/public/third.html');
});

app.get('/forth', function(req, res) {
    res.sendFile(path.join(__dirname)+'/public/forth.html');
});

app.get('/fifth', function(req, res) {
    res.sendFile(path.join(__dirname)+'/public/fifth.html');
});
app.get('/sixth', function(req, res) {
    res.sendFile(path.join(__dirname)+'/public/sixth.html');
});
app.get('/seven', function(req, res) {
    res.sendFile(path.join(__dirname)+'/public/seven.html');
});
app.get('/eight', function(req, res) {
    res.sendFile(path.join(__dirname)+'/public/eight.html');
});
app.get('/route', function(req, res) {
    res.sendFile(path.join(__dirname)+'/public/route.html');
});



app.get('/data',function(req,res){

view.view(res);

});

app.post('/insert',function(req,res){
  var name = req.body.name;
  var runs = req.body.runs;
  console.log(runs);
  var list = {name:name,runs:runs};
   var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'cricket'
    });

  conn.connect(function(err) {
        if (!err) {
            console.log("database connected");
            conn.query("insert into player SET ?",list,function(err, rows) {

               if(!err){
               		 res.send();

               }
               else{
               	console.log(err);
               }
               
            });
        }
        else{
        	console.log("error");
        }
    });

});



app.post('/delete',function(req,res){
 var id = req.body.id;
 console.log(req.body);
   var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'cricket'
    });

  conn.connect(function(err) {
        if (!err) {
            console.log("database connected",id);
            conn.query("delete from player where id = ?",[id],function(err, rows) {

               if(!err){
               		 res.send();

               }
               else{
               	console.log(err);
               }
               
            });
        }
        else{
        	console.log("error");
        }
    });

});


var server = app.listen(7778, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening at %s on port %s", host, port);
});




