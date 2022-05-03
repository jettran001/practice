
const express = require('express');
const app = express();
const port = 3000;
const {engine} = require('express-handlebars');
const path = require('path');
const routes = require('./routes');
const db = require('./config/db');

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'resources/views'));

db.connect();
routes(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});