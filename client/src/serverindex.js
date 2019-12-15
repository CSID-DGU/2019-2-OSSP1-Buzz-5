<<<<<<< HEAD
var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var test = require('./main');
//const db = require('../src/Server/module/pool');
const db = require('../src/Server/config/dbpool');

console.log("serverindex.js");

app.get('/test', async function (req, res) {
    console.log("in router ");

    try {
        console.log("in try ");
        let insertUserQuery = 'insert into innodb.User(UserName, Email, Password)  values ("yejiikim", "yejiiii@naver.com", "iamyejii")';
  
        db.query(insertUserQuery, (err, rows) => {
            if (!err) {
                console.log("no err");
                console.log(rows);

                res.status(201).send({
                    message : "Insert Success",
                    data : rows
                });
=======
// var express = require('express');
// var router = express.Router();
// var app = express();
// var bodyParser = require('body-parser');
// var test = require('./main');
// //const db = require('../src/Server/module/pool');
// const db = require('../src/Server/config/dbpool');

// console.log("serverindex.js");

// app.post('/', async function (req, res) {
//     // console.log("in router ");
//     var 
    
// app.get('/test', async function (req, res) {
//     console.log("in router ");

//     try {
//         console.log("in try ");
//         let insertUserQuery = 'insert into innodb.User(UserName, Email, Password)  values ("yejiikim", "yejiiii@naver.com", "iamyejii")';

//         db.query(insertUserQuery, (err, rows) => {
//             if (!err) {
//                 console.log("no err");
//                 console.log(rows);

//                 res.status(201).send({
//                     message : "Insert Success",
//                     data : rows
//                 });
>>>>>>> b2e6c098cf3a1d291a8402a0024abdc92ce58446
                
//             } else {
//                 console.log(`query error : ${err}`);
//                 console.log("Insert Error");

//                 res.status(500).send({
//                     message : "Insert Error",
//                     data : err
//                 });
//             }

//         })


//     } catch (err) {
//         //return next(err);
//     }
// });

// app.listen(8080);

// module.exports = app;