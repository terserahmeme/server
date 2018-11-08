'use strict'
const express = require('express'),
      router = express.Router(),
      Meme  = require('../models/meme'),
      {auth} = require('../middleware/auth.js'),
      User = require('../models/user')

/* GET main endpoint. */


router.post('/', auth, function(req, res){
  // req.body = {url:'xxxx'}
  console.log(req.body,'create meme')
  Meme.create(req.body)
  .then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    res.status(500).json(err)
  });
})

module.exports = router