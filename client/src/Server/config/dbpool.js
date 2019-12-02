
const mysql = require('mysql');
const connection = mysql.createPool({
host: 'buzz-database.cj4klynaikoy.ap-northeast-2.rds.amazonaws.com',
port: 3306,
user: 'Buzz',
password: 'buzz1234',
database: 'innodb'
});

module.exports=connection;

