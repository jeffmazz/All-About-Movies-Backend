import {fetchActorsData} from './functions/fetch-data'
import {getPageNumber} from "./functions/getPageNumber"

module.exports = async(req, res) => {
    const pageNumber = getPageNumber(req)
    const url = `https://api.themoviedb.org/3/person/popular?language=en-US&page=${pageNumber}`
    await fetchActorsData(url, req, res)
}