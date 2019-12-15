var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var test = require('../main');
//const db = require('../src/Server/module/pool');
const db = require('../Server/config/dbpool');


console.log("makeroom.js");

app.post('/Makeroom', async function (req, res) {
    console.log("in makeroom router ");
    console.log('req :', req);

    try {
        let makeRoomQuery = 'insert into innodb.Room(RoomName, RoomPassword) values(@req.RoomName, @req.RoomPassword)';
        
        db.query(makeRoomQuery, (err, rows) => {
            if (!err) {
                console.log("no err");
                console.log(rows);

                res.status(201).send({
                    message : "make room Success",
                    data : rows
                });
                
            } else {
                console.log(`query error : ${err}`);
                console.log("make room Error");

                res.status(500).send({
                    message : "make room Error",
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