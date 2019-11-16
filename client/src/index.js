import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('app'));
serviceWorker.unregister();
/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'buzz-database.cj4klynaikoy.ap-northeast-2.rds.amazonaws.com',
  user     : 'Buzz',
  password : 'buzz1234',
  port     : 3306,
  database : 'innodb'
});

connection.connect();

connection.query('SELECT * from User', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
});

connection.end();
*/