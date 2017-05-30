// server.js
// load the things we need
var http     = require('http');
var express = require('express');
var favicon      = require('serve-favicon');
var app = express();
var server   = http.Server(app);
var io       = require('socket.io')(server);

var configServer = require('./config/server.js')[process.env.NODE_ENV || 'development'];

var MailController  = require('./app/controllers/mail');
MailController = new MailController();

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/sources/favicon.ico'));

app.use(function (req, res, next) {
   res.locals.makeURL = function(suburl){ return configServer.io_domain + suburl };
   next();
});

// set the view engine to ejs
app.set('view engine', 'ejs');

io.on('connection', function(socket){
    console.log("User Connected");
    socket.on('send email', function(data){
        MailController.send(data);
        socket.emit('email sent');
    });
});

// use res.render to load up an ejs view file


// ROUTES
require('./app/routes.js')(app, io); // load our routes and pass in our app and fully configured passport


server.listen(80, function(){
  console.log('listening on *:80');
});
