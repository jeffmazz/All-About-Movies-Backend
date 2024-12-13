import {fetchData} from './fetch-data'

module.exports = async(req, res) => {
    const {q} = req.query
    if(!q) return res.status(400).json({error: "Query not provided"})
    const url = `https://api.themoviedb.org/3/search/multi?query=${q}&include_adult=false&language=en-US&page=1`
    fetchData(url, req, res)
}