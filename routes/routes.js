const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');
const NewsAPI = require('newsapi');
const { response } = require('express');
const newsapi = new NewsAPI('process.env.API_KEY');
const api_key = process.env.API_KEY


router.get('/', async (req,res) => {

    // const api_url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey='+api_key

    // const fetch_response = await fetch(api_url)

    // const json = await fetch_response.json()
    // res.json(json)

    var request = require('request');
    var options = {
     'method': 'GET',
     'url': 'https://newsapi.org/v2/top-headlines?country=in&apiKey='+api_key,
    'headers': {
    }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.json(response.body);
        });

})

module.exports = router



