var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: "buzz-database.cj4klynaikoy.ap-northeast-2.rds.amazonaws.com",
	user: "Buzz",
	password : "buzz1234",
	port : 3306,
	database : "innodb"
})

connection.connect();

app.post('/Login', function(req, res) {
	var UserName = req.body.id;
	var Password = req.body.pw;

	if(UserName && Password) {
		connection.query("INSERT INTO user (UserName, Password) VALUES ('"+ UserName + "', '" + Password + "')", function(error, result, fields) {
			if (error) {
				res.send("err : " + error)
			}
			else {
				console.log(UserName + ', ' + Password)
				res.send("Success " + UserName + ", " + Password)
			}
		})
	}
	//res.send("id : " + userID + "pw : " + userPW);
})

app.listen(3000, function() {
	console.log("Server starting with 3000");
})

// let dbconfig = require(__dirname+'../../database.json');
// let connection = mysql.createConnection(dbconfig);

// const app = express();
// const port = 3000;

// app.use('/', express.static(__dirname + "./public"));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.get('/login', (req, res) =>{
// 	connection.query("SELECT * FROM UserName", (err, rows) => {
// 		if(err) throw err;

// 		res.send(rows);
// 	});
// });
// const server = app.listen(port, () => {
// 	console.log('Express listening on port', port);
// });