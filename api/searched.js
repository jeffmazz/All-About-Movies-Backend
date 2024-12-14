import {fetchData} from './functions/fetch-data'
import {getPageNumber} from "./functions/getPageNumber"

module.exports = async(req, res) => {
    const {q} = req.query
    if(!q) return res.status(400).json({error: "Query not provided"})
    const pageNumber = getPageNumber(req)
    const url = `https://api.themoviedb.org/3/search/multi?query=${q}&include_adult=false&language=en-US&page=${pageNumber}`
    await fetchData(url, req, res)
}