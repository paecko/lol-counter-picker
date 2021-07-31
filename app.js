const express = require('express')
const app = express()
const championsRouter = require('./controllers/champions')
const matchesRouter = require('./controllers/matches')
const statisticsRouter = require('./controllers/statistics')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')

const url = config.MONGODB_URI
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

app.use(cors())
app.use(express.static('build'))
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended:true}))
app.use('/api/champions', championsRouter)
app.use('/api/matches', matchesRouter)
app.use('/api/statistics', statisticsRouter)

module.exports = app