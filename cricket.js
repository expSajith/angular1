var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const mysql = require('mysql');
var app = express();
var path = require('path');

module.exports.view = function(res) {

 var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'cricket'
    });

 conn.connect(function(err) {
        if (!err) {
            console.log("database connected");
            conn.query("select id,name,runs from player", function(err, rows) {
                if (!err) {
                    if (rows.length > 0) {
                        var data = JSON.stringify(rows);
                        var json = JSON.parse(data);
                        console.log(json);
                        res.send(json);
                    } 
                }
            });
        }
    });


}