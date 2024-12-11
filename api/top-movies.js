const apiKey = process.env.API_kEY
const options = {
    method: "GET",
    headers: {
        accept : "application/json",
        Authorization: `Bearer ${apiKey}`
    }
}

module.exports = async(req, res) => {

    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        if(!response.ok) throw new Error('Failed to fetch top rated movies from API')
        const data = await response.json()
        const results = data.results
        return res.status(200).json(results)
    } catch(err) {
        console.error(err)
        return res.status(500).json({error: err.message})
    }

}