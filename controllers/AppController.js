'use strict'

const async = require('async')
const request = require('request')



function getIndex(req, res){
    async.times(2, (i, callback) => {
        var options = {
            url : 'https://httpbin.org/get',
            qs: {
                'lenguaje': 'en-US',
                'page' : i+1,
                'region' : 'us'
            }
        }

        request(options, (error, response, body) => {
            var result = JSON.parse(body)
            var data = result
            callback(null, data)
        })
    }, (err, results) => {
        res.json(results)
    })
}


module.exports = {
	getIndex
}
