var express = require('express')
var body = require('body-parser')
var url = require('url')
var path = require('path')
var http = require('http')

var app = express()
var usercontroller = require('./server/controller/usercontroller')

app.options("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
});

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(body.json())
app.use(body.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'dist/myangularapp')))

app.use(usercontroller)
app.set('port', 3000)
const port = 3000

server = http.createServer(app)

server.listen(port, function () {
    console.log('server listen')
})