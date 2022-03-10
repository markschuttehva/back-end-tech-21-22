/* routes*/
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const { required } = require('nodemon/lib/config');
/* bcrypt voor het versleutelen van wachtwoorden
https://www.youtube.com/watch?v=hh45sR9WNH8&ab_channel=ChristianHur
https://github.com/ChristianHur/152-150-Web-Programming-2/tree/master/unit6
*/
const exphbs = require('express-handlebars').engine; 

/* Port leet \,,/ (^.^) \,,/ */
const PORT = process.env.PORT || 1337;

/* voor de statische bestanden zoals css en afbeeldingen */
app.use(express.static(__dirname + "/public"));

// voor het versturen van gegevens */
app.use(express.urlencoded({ extended: false}))

const users = [];

/* mongoose en mongodb voor een database connectie */
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').parse();  
}
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('connected to mongoose'));

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

app.post('/register', onRegister);
app.post('/login', onLogin);

function onHome (req, res) {
    res.render("main", {name: 'Mark', pokemon: 'Charmander'});
}

function onLogin (req, res) {
    res.render('login');
}

function onAbout (req, res) {
    res.render('about');
}

function onRegister (req, res) {
    res.render('register');
    res.name
}

/* async wordt gebruikt omdat het een await bevat hierdoor kan het verder met de code*/ 
async function onRegister (req, res) {
    //res.render('register');
    try {
        /* hashed password, password wordt 10 gehashed door await */
        const hashedPassword = await bcrypt.hash(req.body.password, 10); 
        users.push({
            /* Haalt de gegevens uit het formulier en plaatst deze in de users array (name in het form)*/
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            pokemon: req.body.pokemon
        });
        res.redirect('/login');
    } catch {
        res.redirect('/register');
    }
    console.log(users);
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

