const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const product = require('./routes/product.route'); // Imports routes for the products
const views = require('./views/views');
const app = express();
// Set up mongoose connection
const mongoose = require('mongoose');


let dev_db_url = 'mongodb+srv://anchori:A1mBf0W3XL21nlLJ@sportcomdb.wsq9v.mongodb.net/sportcomdb?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// <-------app.use----->
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/',views)


//<---------Port-------->

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});