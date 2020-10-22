const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let beerSchema = new Schema({
  name: {
    type:String
  },
  brewery: {
    type: String
  },
  style: {
    type: String
  },
  img: {
    type: String
  }
}, {
    collection: 'beers'

})

module.exports = mongoose.model('Beer', beerSchema)
