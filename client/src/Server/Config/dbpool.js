const mysql = require('promise-mysql');
const config = {
    host: 'buzz-database.cj4klynaikoy.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    user: 'Buzz',
    password: 'buzz1234',
    database: 'innodb',
}
module.exports = mysql.createPool(config); 