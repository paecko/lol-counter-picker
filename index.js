const app = require('./app')
const fs = require('fs')
const config = require('./utils/config')

const key = fs.readFileSync('./server.key')
const cert = fs.readFileSync('./server.cert')
const https = require('https')


const server = https.createServer({key:key, cert:cert}, app)

server.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
})  