const matchesRouter = require('express').Router()
const Match = require('../models/matches')

matchesRouter.get('/', async(request, response) => {
    const matches = await Match.find({})
    response.json(matches)
})

matchesRouter.post('/', async(request, response) => {
    const body = request.body
    const match = new Match(body)
    try {
        const savedMatch = await match.save()
        response.json(savedMatch)
    } catch (error) {
        console.error(error)
    }
})

matchesRouter.get('/:matchId', async(request, response) => {
    const matchId = request.params.matchId
    const match = await Match.findOne({gameId: Number(matchId)})
    response.json(match)
  
})

module.exports = matchesRouter
