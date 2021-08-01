const app = require('./app')
const config = require('./utils/config')
const key = fs.readFileSync('./server.key')
const http = require('http')
const server = http.createServer(app)

server.listen(config.PORT || 3001, () => {
    console.log(`Server running on port ${config.PORT}`)
})  