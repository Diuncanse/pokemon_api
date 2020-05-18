const mongoose = require('mongoose')
const Pokemon = mongoose.model('Pokemon')

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query
    const pokemon = await Pokemon.paginate({}, {
      page, limit: 10
    })

    return res.json(pokemon)
  },

  async show(req, res) {
    const pokemon = await Pokemon.findById(req.params.id)

    return res.json(pokemon)
  },

  async store(req, res) {
    const pokemon = await Pokemon.create(req.body)

    return res.json(pokemon)
  },

  async update(req, res) {
    const pokemon = await pokemon.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(pokemon)
  },

  async destroy(req, res) {
    await Pokemon.findByIdAndRemove(req.params.id)

    res.send()
  }
}