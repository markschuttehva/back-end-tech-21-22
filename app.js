/* routes*/
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
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

/* mongoose en mongodb voor een database connectie */
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();  
}
 
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL)
// const db = mongoose.connection;
// db.on('error', error => console.error(error));
// db.once('open', () => console.log('connected to mongoose'));

/* datamodel */
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    email: String,
    date: Date,
    password: String,
    pokemon: String
});

const User = mongoose.model('User',userSchema);

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

app.post('/register', onPostRegister);
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
}

/* async wordt gebruikt omdat het een await bevat hierdoor kan het verder met de code*/ 
async function onPostRegister (req, res) {
    //res.render('register');
    try {
        /* hashed password, password wordt 10 gehashed door await */
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(hashedPassword);
        console.log("name = "+ req.body.name,
                    "email = "+ req.body.email,
                    "date = "+ req.body.date,
                    "password "+ hashedPassword,
                    "pokemon of choice "+ req.body.pokemon);
        await User.create({
            /* Haalt de gegevens uit het formulier en plaatst deze in de users array (name in het form)*/
            name: req.body.name,
            email: req.body.email,
            date: req.body.date,
            password: hashedPassword,
            pokemon: req.body.pokemon
        });
        res.redirect('/login');
       
    } catch(err) {
        console.log(err);
        res.redirect('/register');
    }
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

