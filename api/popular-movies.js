const apiKey = process.env.API_KEY
const options = {
    method: "GET",
    headers: {
        accept : "application/json",
        Authorization: `Bearer ${apiKey}`
    }
}

import filter from "./filter"

module.exports = async(req, res) => {

    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        if(!response.ok) throw new Error('Faliled to fetch popular movies from API')
        const data = await response.json()
        const results = data.results
        const filteredResults = await filter(results)
        return res.status(200).json(filteredResults)
    } catch(err) {
        console.error(err)
        return res.status(500).json({error: err.message})
    }

}