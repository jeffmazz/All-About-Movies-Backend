import {fetchData} from "./fetch-data"

module.exports = async(req, res) => {
    const {pageNumber} = req.query || 1
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageNumber}`
    fetchData(url, req, res)
}