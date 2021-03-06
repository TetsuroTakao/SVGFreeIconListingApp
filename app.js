var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 80);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
// APIs
app.get('/freeIcons', (req) => {
  var account = req.query.account;
  if(account == null){

  }
  else{
    
  }
}, (req,res) => {

  res.json([{icon : 'icon1 of freeIcons'},{icon : 'icon2 of freeIcons'}]);
});
app.post('/setIcon',(req,res) => {
  res.writeHead(200,{'Content-Type' : 'application/json'});
  res.end(JSON.stringify({message : 'setIcon called'}));
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
