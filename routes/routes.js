const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');
const NewsAPI = require('newsapi');
const { response } = require('express');
const newsapi = new NewsAPI('process.env.API_KEY');
const api_key = process.env.API_KEY


router.get('/', async (req,res) => {

    var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://news-hexaware.herokuapp.com/news',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
})

module.exports = router



