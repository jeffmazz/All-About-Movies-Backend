const getPageNumber = (req) => {
    const page = Number(req.query.pageNumber)
    return page > 0 ? page : 1
}

module.exports = pageNumber