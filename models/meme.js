var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const encrypt = require('../helpers/encrypt')
const User = require('./user')


var memeSchema = new Schema({
  url: {
    type:String
  } 
});

memeSchema.post('save', function(doc){
  console.log('doc', doc, 'user', req.user)
})

var Meme = mongoose.model('Meme', memeSchema);

module.exports=Meme