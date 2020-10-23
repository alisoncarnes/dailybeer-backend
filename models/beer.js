const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beerSchema = new Schema({
  name: {
    type:String
  },
  brewery: {
    type: String
  },
  style: {
    type: String
  },
  abv: {
    type: String
  }
}, {
    collection: 'beers'

})

const Beer = mongoose.model('Beer', beerSchema)

module.exports = Beer
