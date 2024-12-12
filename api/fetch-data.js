const filter = (arr) => {
    return arr.map(item => ({
        id: item?.id,
        backdrop_path: item?.backdrop_path,
        title: item?.title,
        original_title: item?.original_title,
        overview: item?.overview,
        vote_average: item?.vote_average,
        vote_count: item?.vote_count,
        release_date: item?.release_date,
        popularity: item?.popularity,
        first_air_date: item?.first_air_date,
        known_for: item?.known_for.map(item => ({
            id: item.id,
            name: item.name,
            title: item.title,
            original_title: item.original_title,
            vote_average: item.vote_average,
        }))
    }))
}

export default filter