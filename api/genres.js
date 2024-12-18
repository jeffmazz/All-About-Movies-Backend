const apiKey = process.env.API_KEY
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`
    }
}

module.exports = async(req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    const { id } = req.query
    if(!id) return res.status(400).json({error: "Gender id not provided"})

    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}`, options)
        if(!response.ok) throw new Error("Failed to fetch data from API")
        const data = await response.json()
        const results = data.results
        return res.status(200).json(results)
    } catch(err) {
        console.error(err)
        return res.status(500).json({error: err.message})
    }

}
