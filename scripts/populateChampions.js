const axios = require('axios')
const Champion = require('../models/champion')

const populate = async () => {
    const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json')
    const champions = response.data.data

    for (const key in champions) {
        const championObj = new Champion({
            name: key,
            championId: Number(champions[key]['key']),
            image: champions[key]['image']['full']
        })
       await axios.post('http://localhost:3001/api/champions', championObj)
    }
}

populate()

