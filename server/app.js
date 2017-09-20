var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Twitter = require('twitter');
var router = require('router');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var client = new Twitter({
	consumer_key: 'l4Vnbx1yqCUA3DxfZqlFBh266',
	consumer_secret: 'HyjJfzheUWnc9Df1zDe20cKLfCd6buuK34kq5OLJMuXrclIf2S',
	access_key: '892914191828307968-zM6xwrUooFm7QFSaYl8xWl1BqEAjZeV',
	access_secret: 'qB5YG54eGrs7oE76NhJGX4wsaeCzIJe3erd5CtSmmeaML'
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.post('/tweet', function(err, req, next) {
	var tweeter = req.body.tweeter;
	client.post('statuses/update', {status: tweeter}, function(error, tweet, response) {
		if (error) {
			console.log(error);
		}
		console.log(tweet);
		console.log(response);
	});
});

module.exports = app;
