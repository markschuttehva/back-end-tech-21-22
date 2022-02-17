const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/about', function (req, res) {
    res.send('about')
})

app.get('/register', function (req, res) {
    res.send('register')
})

app.listen(3000)