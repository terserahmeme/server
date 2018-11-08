const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.listen(3000,function(){
    console.log('listening on port',3000)
})