 var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = express.Router();
 var indexRouter = require('./routes/index');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger(' dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var grades = [
      { id: 1, name : "yahia", course: "MWA", grade: "A"},
      { id: 2, name : "winta", course: "MWA", grade: "A"},
      { id: 3, name : "livan", course: "MWA", grade: "A"},
]


// app.all('/', function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*"); 
//    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept, Authorization, Content-Length");
//    next();
// });

app.use('/ajax', indexRouter);


app.use('/', router.get('/', function(req, res, next) {
	console.log(grades.slice(0,1));
  res.json(grades);
}));

app.use('/', router.post('/', function(req, res, next) {
	const newData = {id : grades.length+1, name: "mera", course: "EA", grade:"A"};
	grades.push(newData);
   res.json(newData);
}));

app.use('/', router.put('/:id', function(req, res,next){
	const  grade = grades.find(c => c.id === parseInt(req.params.id));
	grade.name = "berhe";
  res.json(grade);
}));

app.use('/', router.delete('/:id', function(req, res, next) {
  const grade = grades.find(c => c.id === parseInt(req.params.id));
  grades.splice(parseInt(req.params.id),1);
  res.json(grades);
}));

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
app.listen(3000, ()=> console.log('server listening in 3000'));
module.exports = app;
