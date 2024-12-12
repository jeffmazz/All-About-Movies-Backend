const apiKey = process.env.API_KEY
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

        const filteredResults = results.map(item => ({
            id: item?.id,
            backdrop_path: item?.backdrop_path,
            title: item?.title,
            original_title: item?.original_title,
            overview: item?.overview,
            vote_average: item?.vote_average,
            vote_count: item?.vote_count,
            release_date: item?.release_date,
            popularity: item?.popularity,
            first_air_date: item?.first_air_date,
            known_for: item.known_for ? item.known_for.map(item => ({
                id: item.id,
                name: item.name,
                title: item.title,
                original_title: item.original_title,
                vote_average: item.vote_average,
            })) : undefined
        }))

        return res.status(200).json(filteredResults)
    } catch(err) {
        console.error(err)
        return res.status(500).json({error: err.message})
    }

}