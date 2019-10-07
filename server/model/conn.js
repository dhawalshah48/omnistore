var mongoose = require('mongoose')
var url = 'mongodb://localhost:27017/omnistore'

mongoose.connect(url)

con = mongoose.connection

module.exports = con
console.log('connection done')