const axios = require('axios')
const Statistic = require('../models/statistic')

const mapIdToNames = async () => {
    let champions = await axios.get('http://localhost:3001/api/champions')
    champions = champions.data
    const idToNames = {}
    for (let i = 0; i < champions.length; i++) {
        idToNames[champions[i].championId] = champions[i].name
    }
    return idToNames
}

const createLocalWinMap = async () => {
    let champions = await axios.get('http://localhost:3001/api/champions')
    champions = champions.data
    let winMap = {}
    for (let i = 0; i < champions.length; i++) {
        const championName = champions[i].name
        winMap[championName] = {}
        for (let j = 0; j < champions.length; j++) {
            const opposingChampionName = champions[j].name
            winMap[championName][opposingChampionName] = {Wins: 0, Losses:0, Games: 0, WinRate: 0}
        }
    }
    return winMap
}

const createMongoWinMap = async () => {
    let champions = await axios.get('http://localhost:3001/api/champions')
    champions = champions.data
    for (let i = 0; i < champions.length; i++) {
        const championName = champions[i].name
        winMap = []
        for (let j = 0; j < champions.length; j++) {
            const opposingChampName = champions[j].name
            let obj = {championName:opposingChampName, Wins:0, Losses:0, Games:0, WinRate:0}
            winMap.push(obj)
        }
        await axios.post('http://localhost:3001/api/statistics', {championName: championName, winMap:winMap})
    }
}

const championWinRates = async (winMap, matchData) => {
    const teams = matchData.teams
    const participants = matchData.participants

    let team1 = teams[0]
    let winningTeam = team1.win === 'Win' ? 100 : 200

    let winningTeamNames = []
    let losingTeamNames = []
    //winMap = {21: {10: {'Wins': 50, 'Losses':100}, 15: {'Wins': 75, 'Losses':120}}, 10: {...}}
    for (let i = 0; i < participants.length; i++) {
        const championId = participants[i].championId
        if (participants[i].teamId === winningTeam){
            winningTeamNames.push(idToNames[championId])
        } else {
            losingTeamNames.push(idToNames[championId])
        }
    }

    for (let i = 0; i < winningTeamNames.length; i++) {
        const winningChamp = winningTeamNames[i]
        for (let j = 0; j < losingTeamNames.length; j++) {
            const losingChamp = losingTeamNames[j]
            winMap[winningChamp][losingChamp]['Wins']++
            winMap[winningChamp][losingChamp]['Games']++
            winMap[winningChamp][losingChamp]['WinRate'] = 
                (winMap[winningChamp][losingChamp]['Wins']/winMap[winningChamp][losingChamp]['Games']) * 100
            
            winMap[losingChamp][winningChamp]['Losses']++
            winMap[losingChamp][winningChamp]['Games']++
            winMap[losingChamp][winningChamp]['WinRate'] = 
                (winMap[losingChamp][winningChamp]['Wins']/winMap[losingChamp][winningChamp]['Games']) * 100

        }
    }
}


const analyzeMatches = async () => {
    
    let winMap = await createLocalWinMap()
    console.log('--- local winMap created ---')

    const matches = await axios.get('http://localhost:3001/api/matches')
    const matchData = matches.data
    console.log('--- matches received ---')

    for (let i = 0; i < matchData.length; i++) {
        await championWinRates(winMap, matchData[i])
        console.log(`Win rates for Game ${i} calculated`)
    }

    console.log('-- Updating winmaps in mongodb ---')
    for (champion in winMap) {
        const newWinMap = []
        for (opposingChamp in winMap[champion]){
            const newObj = winMap[champion][opposingChamp]
            newObj.championName = opposingChamp
            newWinMap.push(newObj)
        }
        console.log(`Updating winmap of ${champion}`)
        await axios.put(`http://localhost:3001/api/statistics/${champion}`, {winMap:newWinMap})
    }

}

const insertDummy = async () => {
    let champions = await axios.get('http://localhost:3001/api/champions')
    champions = champions.data
    winMap = []
    for (let i = 0; i < champions.length; i++) {
        const championName = champions[i].name
        let obj = {championName:championName, Wins:0, Losses:0, Games:0, WinRate:0}
        winMap.push(obj)    
    }
    await axios.post('http://localhost:3001/api/statistics', {championName: 'dummy', winMap:winMap})
}

let idToNames;
const main = async () => {
    idToNames = await mapIdToNames()
    //createMongoWinMap()
    //analyzeMatches()
    insertDummy()
}
main()
