import {fetchData} from './fetch-data'

module.exports = async(req, res) => {
    const query = req.body.q || req.body.q.trim()
    if(!query) return res.status(400).json({error: "Query not provided"})
    const url = `https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`
    fetchData(url, req, res)
}