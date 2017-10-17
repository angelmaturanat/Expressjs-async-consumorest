const express = require('express')
const app = express()
const request = require('request')
const async = require('async')

const AppController = require('./controllers/AppController');


app.get('/', AppController.getIndex)










app.listen('8080', () => {
    console.log('corriendo en puerto 8080')
})