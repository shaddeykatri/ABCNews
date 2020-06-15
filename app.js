const NewsAPI = require('newsapi');
var morgan = require('morgan')
const env = require('dotenv').config()
const express = require('express')


const app = express()


app.use(morgan('dev'))

app.use(express.json())
const newsRouter = require('./routes/routes')
app.use('/news',newsRouter)


app.listen(process.env.PORT || 9000, () => {
    console.log('Server started')
})