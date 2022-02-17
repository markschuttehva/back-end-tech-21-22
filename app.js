const express = require('express')
const app = express()

app.all('/', (req, res) => {
    res.status(200).send('<h1>200! Hello world</h1>');
});

app.all('/about', (req, res) => {
    res.status(200).send('<h1>200! about</h1>');
});

app.all('/register', (req, res) => {
    res.status(200).send('<h1>200! register</h1>');
});

app.all('/login', (req, res) => {
    res.status(200).send('<h1>200! login</h1>');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
});

app.listen(3000)