const express = require('express');
const app = express();
const PORT = process.env.PORT || 1337;

app.get('/', onHome);
app.get('/', onAbout);
app.get('/', onRegister);
app.get('/', onLogin);
app.get('*', notFound)

function onHome (req, res) {
    res.send('<h1>home</h1>');
}

function onAbout (req, res) {
    res.send('<h1>About</h1>');
}

function onRegister (req, res) {
    res.send('<h1>Register</h1>');
}

function onLogin (req, res) {
    res.send('<h1>Login</h1>');
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