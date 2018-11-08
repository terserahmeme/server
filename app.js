'use strict'
const mongoose=require('mongoose')
const express = require('express'),
      logger = require('morgan'),

      routes = require('./router/index'),
      userroutes=require('./router/user'),
      memeRoutes = require('./router/meme')
const app = express()

require('dotenv').config()

app.use(require('cors')())
app.use(logger('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/', routes);
app.use('/users',userroutes)
app.use('/memes', memeRoutes)

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

mongoose.connect('mongodb://localhost:27017/memaker',{useNewUrlParser:true});

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: err
    })
  })
}

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    message: err.message,
    error: {}
  })
})


module.exports = app