const express = require('express')
const morgan = require('morgan')
const helmet =require('helmet')
const compression = require('compression')
const app = express()

//init middleware
app.use(morgan('dev'))
app.use(helmet());
app.use(compression())
//init db
const databaseService = require('./dbs/init.mongodb')
databaseService.connect()
//init router
app.get('/', (req, res) => {
    res.status(200).send('status 200')
})

// handle error


module.exports = app