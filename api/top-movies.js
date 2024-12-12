import {fetchData} from "./fetch-data"

module.exports = async(req, res) => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
    fetchData(url, req, res)
}