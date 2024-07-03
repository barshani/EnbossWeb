var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const headers = require('./middleware/headers');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var parksRouter = require('./routes/parks');
var favoritesRouter = require('./routes/favorites');
var guidesRouter = require('./routes/guides');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(headers);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/parks', parksRouter);
app.use('/favorites', favoritesRouter);
app.use('/guides', guidesRouter);

module.exports = app;
