const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const route = require('./routes');

//Storing configuration in the environment separate from code
require('dotenv').config();

//logger HTTP
// app.use(morgan('combined'));

//Template Engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Use static folders
app.use(express.static(path.join(__dirname, 'public')));

//Connect mongoDB
const db = require('./config/db/connectToMongoDB');
db.connectToMongoDB();

//Set PORT
const PORT = process.env.PORT;

//Lay Thong Tin tu form theo phuong thuc POST va dung req.body
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Start
route(app);

app.listen(PORT, () => console.log(`Listening from http:localhost:${PORT}`));
