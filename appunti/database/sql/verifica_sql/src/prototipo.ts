var fs = require('fs');
var SQL = require('sql.js');
var filebuffer = fs.readFileSync('sakila.sqlite3');
var db = new SQL.Database(filebuffer);
var res = db.exec("SELECT * FROM categoria");
console.log(res);