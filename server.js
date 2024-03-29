const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const sio = require('socket.io');
// const favicon = require('serve-favicon');
const compression = require('compression');
const bodyParser = require('body-parser');

console.log(" server.js ");
const app = express(),
  // options = { 
  //   key: fs.readFileSync(__dirname + '/rtc-video-room-key.pem'),
  //   cert: fs.readFileSync(__dirname + '/rtc-video-room-cert.pem')
  // },
  port = process.env.PORT || 3000,
  server = process.env.NODE_ENV === 'production' ?
    http.createServer(app).listen(port) :
    https.createServer(app).listen(port),
  io = sio(server);
// compress all requests
app.use(compression()); 
app.use(express.static(path.join(__dirname, '/client/build')));
app.use((req, res) => res.sendFile(__dirname + '/client/build/index.html'));
// app.use(favicon('/client/dist/favicon.ico'));
// Switch off the default 'X-Powered-By: Express' header
app.disable('x-powered-by');
io.sockets.on('connection', socket => {
  let room = '';
  // sending to all clients in the room (channel) except sender
  socket.on('message', message => socket.broadcast.to(room).emit('message', message));
  socket.on('find', () => {
    const url = socket.request.headers.referer.split('/');
    room = url[url.length - 1];
    const sr = io.sockets.adapter.rooms[room];
    if (sr === undefined) {
      // no room with such name is found so create it
      socket.join(room);
      socket.emit('create');
    } else if (sr.length === 1) {
      socket.emit('join');
    } else { // max two clients
      socket.emit('full', room);
    }
  });
  socket.on('auth', data => {
    data.sid = socket.id;
    // sending to all clients in the room (channel) except sender
    socket.broadcast.to(room).emit('approve', data);
  });
  socket.on('accept', id => {
    io.sockets.connected[id].join(room);
    // sending to all clients in 'game' room(channel), include sender
    io.in(room).emit('bridge');
  });
  socket.on('reject', () => socket.emit('full'));
  socket.on('leave', () => {
    // sending to all clients in the room (channel) except sender
    socket.broadcast.to(room).emit('hangup');
    socket.leave(room);
  });

  socket.on('chat', (msg) => {
    console.log('message:', msg)
    io.emit('chat', msg);
  });
});


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: conf.host,
//   user: conf.user,
//   password: conf.password,
//   port: conf.port,
//   database: conf.database
// });
// connection.connect();

// app.get('/signup', (req, res) => {
//   connection.query(
//     'SELECT * FROM User',
//     (err, rows, fields) => {
//       res.send(rows);
//     }  
//   )
// });
// app.listen(port, () => console.log(`Listening on port ${port}`));