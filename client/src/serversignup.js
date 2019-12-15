var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var test = require('./main');
const db = require('./Server/config/dbpool');

console.log("singup.js");

app.post('/serversignup', async function (req, res) {
    console.log("in signup router ");
    console.log('req:', req);

    try {
        console.log("in try ");
        let insertUserQuery = 'insert into innodb.User(UserName, Email, Password)  values (@req.name, @req.email, @req.password)';

        db.query(insertUserQuery, (err, rows) => {
            if (!err) {
                console.log("no err");
                console.log(rows);

                res.status(201).send({
                    message : "make user Success",
                    data : rows
                });
                
            } else {
                console.log(`query error : ${err}`);
                console.log("make user Error");

                res.status(500).send({
                    message : "Insert Error",
                    data : err
                });
            }

        })


    } catch (err) {
        //return next(err);
    }
});

app.listen(8080);

module.exports = app;

// app.post('/', (req, res) => {
//     let data = {name : req.state.name, email : req.state.email, password : req.state.email};
//     let sql = "INSERT INTO innodb.USER SET ?";
//     let query = connection.query(sql, data,(err, results) => {
//         if(err) throw err;
//         res.redirect('/');
//       });
//     });