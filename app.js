const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const { Sequelize } = require('sequelize');
const db = new Sequelize('codegig', 'postgres', '123456789', {
    host: 'localhost',
    dialect: 'postgres',
});

db.authenticate()
    .then(() => console.log('database connected slur!'))
    .catch(err => console.log('error :' + err))

const app = express();

app.get('/', (req, res) => res.send('index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));