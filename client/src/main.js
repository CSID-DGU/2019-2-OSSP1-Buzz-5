/* 유진 추가 부분 */
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

//const router = express.Router();

console.log("main.js ");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))

// var mysql = require('mysql')

// var connection = mysql.createConnection({
//    host: "buzz-database.cj4klynaikoy.ap-northeast-2.rds.amazonaws.com",
//    user: "Buzz",
//    password : "buzz1234",
//    port : 3306,
//    database : "innodb"
// });

// connection.connect();




//db에 유저 정보 추가 부분 
// router.get('/', async(req, res, next) => {
//     console.log("in router ");

//         res.status(201).send({
//              "message" : "insert new user success"
//         });

        // try{
        //   let insertUserQuery = 'insert into innodb.User(UserName, Email, Password)  values (?,?,?)';
        //  // let insertResult = await db.queryParamCnt_Arr(insertUserQuery,[this.state.name, this.state.email, this.state.password]);
  
        //   if(!insertResult){
        //     console.log("Insert Error");
        //     return next(500);
        //   }
  
        //   res.status(201).send({
        //     "message" : "insert new user success"
        //   });
        // } catch(err){
        //   return next(err);
        // }
      // });

      // module.exports = router;

app.listen(3000, function() {
  console.log("Server starting with 3000");
})


