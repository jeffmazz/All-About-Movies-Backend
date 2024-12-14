import {fetchData} from "./functions/fetch-data"
import {getPageNumber} from "./functions/getPageNumber"

module.exports = async(req, res) => {
    const pageNumber = getPageNumber(req)
    const url = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${pageNumber}`
    await fetchData(url, req, res)
}