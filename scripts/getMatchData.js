const axios = require('axios')
const matchList = require('./matchlist.json')
const config = require('./utils/config')
const Match = require('./models/matches')
let matchIndex = 1
let interval;

const matchListLength = matchList.length

const getMatchData = async () => {
    let i = 1
    while (i % 100 !== 0) {
        if (matchIndex > matchListLength) {
            clearInterval(interval)
            break
        }
        console.log(matchIndex, ' -- ', matchList[matchIndex])
        const match = await axios.get(`https://na1.api.riotgames.com/lol/match/v4/matches/${matchList[matchIndex - 1]}`, 
        { params:{api_key: config.API_KEY}})
        const matchData = match.data
        const matchObj = new Match(matchData)
        try {
            await axios.post('http://localhost:3001/api/matches', matchObj)
        } catch (error){
            console.error(error)
        }
        matchIndex++
        i++
    }
}

const run = async () => {
    await getMatchData()
    interval = await setInterval(async () => {
        await getMatchData()
    }, 120 * 1000)
}

run()
