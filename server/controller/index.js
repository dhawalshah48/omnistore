var express = require('express')
var usermodel = require('../model/usermodel')
var router = express.Router()

router.get('/', function (req, res) {
    res.send('This is MEAN STACK app server')
})

router.post('/insertdata', function (req, res) {
    usermodel.insertdata(req.body, function (result) {
        res.json(result)
    })
})

router.get('/viewall', function (req, res) {
    usermodel.viewall('register', function (result) {
        res.json(result)
    })
})

router.post('/deletedata', function (req, res) {
    var d = req.body
    console.log('------------------>>>>>'+d._id)
    usermodel.deletedata('register', d, function (result) {
        res.json(result)
    })
})

module.exports = router