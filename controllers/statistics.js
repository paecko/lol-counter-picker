const statisticsRouter = require('express').Router()
const Statistic = require('../models/statistic')

statisticsRouter.get('/', async(request, response) => {
    let statistics = await Statistic.find({})
    response.json(statistics)
})

statisticsRouter.get('/:champName', async (request, response) => {
    let statistics = await Statistic.find({championName: request.params.champName})
    response.json(statistics)
})

statisticsRouter.post('/', async(request, response) => {
    const championName = request.body.championName
    const winMap = request.body.winMap
    const statistic = new Statistic({
        championName: championName,
        winMap: winMap
    })
    
    try {
        const savedStatistic = await statistic.save()
        response.json(savedStatistic)
    } catch (error) {
        console.error(error)
    }
})

statisticsRouter.put('/:championName', async(request, response) => {
    const championName = request.params.championName
    const winMap = request.body.winMap
    try {
        await Statistic.findOneAndUpdate({championName: championName}, {winMap: winMap})
        response.status(204).end()
    } catch (error) {
        console.error(error)
    }
})

module.exports = statisticsRouter
