require('dotenv').config();
const host = process.env.SERVER_IP;
const port = process.env.SERVER_PORT;

const express = require('express');
const app = express();
const http = require('http');
var server = require('http').createServer(app);
const path = require('path');
const cors = require('cors');

// View engine setup
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.engine('html', require('ejs').renderFile);
app.set('views',__dirname+'/html/');

const players = require('./routes/api/players')();
app.use('/api/players', players);
app.use('/api/players', express.static(path.join(__dirname, 'www')));

const job = require('./routes/job')();

server.listen(port, (err)=>{
  if (err) {
    console.log(err)
	}
  console.log(`Web Server started: http://${host}:${port}`);
})