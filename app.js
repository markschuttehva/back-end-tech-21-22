// import express from 'express';
// import { engine } from 'express-handlebars';
// app.set('views', './views');

/* routes*/
const express = require('express');
const app = express();
/*
https://www.youtube.com/watch?v=hh45sR9WNH8&ab_channel=ChristianHur
https://github.com/ChristianHur/152-150-Web-Programming-2/tree/master/unit6
*/
const exphbs = require('express-handlebars').engine; 

const PORT = process.env.PORT || 1337;

/* voor de statische bestanden zoals css en afbeeldingen */
app.use(express.static(__dirname + "/public"));

/* handlebars settings */
app.set('view engine', "hbs");
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
}));

app.get('/', onHome);
app.get('/about', onAbout);
app.get('/register', onRegister);
app.get('/login', onLogin);
app.get('*', notFound)

function onHome (req, res) {
    res.render("main");
}

function onLogin (req, res) {
    res.render('login');
}

function onAbout (req, res) {
    res.send('<h1>About</h1>');
}

function onRegister (req, res) {
    res.send('<h1>Register</h1>');
}



function notFound (req, res) {
    res.send('<h1>404 page not found</h1>');
}

/*
Andere mannier van routes plaatsen
app.get('/', (req, res) => {
    res.status(200).send('<h1>200! Hello world</h1>');
});
*/

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
}) 

/* linkjes
https://handlebarsjs.com/installation/#npm-or-yarn-recommended
https://expressjs.com/
*/

