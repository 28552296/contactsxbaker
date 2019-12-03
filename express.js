const express = require('express'); 
const APP = express();
const PORT_NUMBER = 4000

const path = require('path');

const ejs = require('ejs'); 
const bodyParser = require('body-parser'); 

APP.set('views',path.join(__dirname,'views')); 

APP.set('view engine', 'ejs'); //Set viewing engine to EJS
APP.use(bodyParser.json()); //Passes JSON objects to and from the server to the web pages.
APP.use(bodyParser.urlencoded({ extended: false })); // A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body). This object will contain key-value pairs, where the value can be a string or array (when extended is false)

APP.get('/', (req, res) =>{
    res.render('contactlist')
})

APP.listen(PORT_NUMBER, () => {
    console.log('Server is live!');
})

module.exports = APP