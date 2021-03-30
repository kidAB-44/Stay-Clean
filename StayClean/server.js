// Dependencies
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

// Initiate Expres app
const app = express();

// Database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
})
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
});

// Routes
const main = require('./routes/scleanMain');
const about = require('./routes/scleanAbout');
const login = require('./routes/scleanLogin');
const regDriver = require('./routes/registerDriver');
const regConductor = require('./routes/registerConductor');
const regCustomer = require('./routes/registerCustomer');

// Configurations
app.set('view engine', 'pug');
app.set('views', './views');

// Middleware
app.use(express.urlencoded({extended:true}));

// Serve static files from Stay Clean Project
app.use(express.static('public'));
app.use('/public/fileUpload', express.static(__dirname + '/public/fileUpload'));

app.use('/main', main);
app.use('/about', about);
app.use('/login', login);
app.use('/driver', regDriver);
app.use('/conductor', regConductor);
app.use('/customer', regCustomer);

// Failed routes
app.get('*', (req, res)=> {
    res.send('The route specified does not exist')
})

// Server call
app.listen(3000, () => {
    console.log('Listening on port 3000.');
})