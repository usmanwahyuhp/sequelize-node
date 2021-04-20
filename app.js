const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

//database connection
const db = require('./config/database');

//tes db conn
db.authenticate()
    .then(() => console.log('database connected slur!'))
    .catch(err => console.log('error :' + err))

const app = express();

app.get('/', (req, res) => res.send('index'));

// gigs routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));