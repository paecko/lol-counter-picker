const cheerio = require('cheerio')
const axios = require('axios')

const getChampionLinks = async () => {
    
    const champions = await axios.get('http://localhost:3001/api/champions')
    const champs = champions.data
    const champLinks = champs.map(champ => ({...champ, link: `https://u.gg/lol/champions/${champ.name}/build`}))
    return champLinks
}

const fetchHTML = async (url) => {
    const { data } = await axios.get(url)
    return cheerio.load(data)
}

const scrapeChampions = async () => {
    const champLinks = await getChampionLinks()
    for (let i = 0; i < champLinks.length; i++){
        const $ = await fetchHTML(champLinks[i]['link'])
        const matchups = $('div[class=matchups]').children('.champion-matchup').children('.champion-name')
        const counters = []
        for (let j = 0; j < matchups.length; j++){
            counters.push($(matchups[j]).text())
        }
        console.log(counters)
        await axios.put(`http://localhost:3001/api/champions/${champLinks[i]['name']}`, {counters: counters})
    }
}

scrapeChampions()