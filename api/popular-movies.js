import {fetchData} from "./functions/fetch-data"
import {getPageNumber} from "./functions/getPageNumber"

module.exports = async(req, res) => {
    const pageNumber = getPageNumber(req)
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
    fetchData(url, req, res)
}