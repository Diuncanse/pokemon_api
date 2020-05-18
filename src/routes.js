const express = require('express')
const PokemonController = require('./controllers/PokemonController')

const routes = express.Router()

routes.get('/pokemon', PokemonController.index)
routes.get('/pokemon/:id', PokemonController.show)
routes.post('/pokemon', PokemonController.store)
routes.put('/pokemon/:id', PokemonController.update)
routes.delete('/pokemon/:id', PokemonController.destroy)

module.exports = routes