/* requirements */
var express = require('express');
var http = require('http');
var path = require('path');


/* project applications declarations */
var routes = require('./routes');
var user = require('./routes/user');


/* app declaration */
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


/* application middleware */
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('vince is a motherfucking rock god'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
// dev environment variables
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


/* routing configurations */
app.get('/', routes.index);
app.get('/users', user.list);


/* application main loop */
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
