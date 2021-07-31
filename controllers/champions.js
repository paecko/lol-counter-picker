const championsRouter = require('express').Router()
const Champion = require('../models/champion')

championsRouter.post('/', async (request, response) => {
    const body = request.body

    if (body.name === undefined || body.image === undefined) {
        return response.status(400).json({ error: 'some or all information missing'})
    }

    const champion = new Champion({
        name: body.name,
        championId: body.championId,
        image: body.image
    })
    
    const savedChampion = await champion.save()
    response.json(savedChampion)
})

championsRouter.get('/', async(request, response) => {
    const champions = await Champion.find({})
    response.json(champions)
})

championsRouter.get('/:name', async(request, response) => {
    const givenName = request.params.name
    const champion = await Champion.findOne({name: givenName})
    response.json(champion)
})

championsRouter.delete('/:name', async(request, response) => {
    const givenName = request.params.name
    await Champion.deleteOne({name: givenName})
    response.status(204).end()
})

module.exports = championsRouter

