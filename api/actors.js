import {fetchActorsData} from './fetch-data'

module.exports = async(req, res) => {
    const url = "https://api.themoviedb.org/3/person/popular?language=en-US&page=1"
    fetchActorsData(url, req, res)
}