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
  User.findByIdAndUpdate(req.user.id, {
    $push: {
      memes: doc.url
    }
  })
  .then((result) => {
    console.log('success push meme to user')
  }).catch((err) => {
    console.log('FAIL push meme to user')
  });
})

var Meme = mongoose.model('Meme', memeSchema);

module.exports=Meme