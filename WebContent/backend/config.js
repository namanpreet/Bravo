var mysql      = require('mongod');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;
