const apiKey = process.env.API_KEY
const options = {
    method: "GET",
    headers: {
        accept : "application/json",
        Authorization: `Bearer ${apiKey}`
    }
}

import {filter, actorsFilter} from "./filter"

const fetchData = async(url, req, res) => {

    try {
        const response = await fetch(url, options)
        if(!response.ok) throw new Error("Failed to fetch data from API")
        const data = await response.json()
        const results = data.results
        const filteredResults = filter(results)
        return res.status(200).json(filteredResults)
    } catch(err) {
        console.error(err)
        return res.status(500).json({error: err.message})
    }

}

const fetchActorsData = async(url, req, res) => {
    try {
        const response = await fetch(url, options)
        if(!response.ok) throw new Error("Failed to fetch data from API")
        const data = await response.json()
        const results = data.results
        const filteredResults = actorsFilter(results)
        return res.status(200).json(filteredResults)
    } catch(err) {
        console.error(err)
        return res.status(500).json({error: err.message})
    }
}

module.exports = {fetchData, fetchActorsData}