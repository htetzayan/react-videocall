const http = require('http');
const express = require('express');
const config = require('./config');
const socket = require('./lib/socket');
const io = require('socket.io');


const app = express();
const server = http.createServer(app);

app.use('/usr/src/app', express.static(`${__dirname}/../client`));

server.listen(config.PORT, () => {
  socket(server);
  console.log('Server is listening at :', config.PORT);
});

//app.get('/usr/src/app', function (req, res) {
  //res.render('index', {});
//});
app.get('*', (req, res) => {                       
  res.sendFile(path.resolve(__dirname, '/usr/src/app', 'index.html'));                               
});

