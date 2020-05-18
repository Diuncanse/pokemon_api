const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const PokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  attack: {
    type: Number,
    required: true
  },
  defense: {
    type: Number,
    required: true
  }
})

PokemonSchema.plugin(mongoosePaginate)

mongoose.model('Pokemon', PokemonSchema)