const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');
const NewsAPI = require('newsapi');
const { response } = require('express');
const newsapi = new NewsAPI('process.env.API_KEY');
const api_key = process.env.API_KEY
console.log(api_key)

router.get('/', async (req,res) => {

    const api_url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey='+api_key
    console.log(api_url)
    const fetch_response = await fetch(api_url)

    const json = await fetch_response.json()
    res.json(json)
})

module.exports = router



