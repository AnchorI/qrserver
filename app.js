const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const product = require('./routes/product.route'); // Imports routes for the products
const views = require('./views/views');
const api = require('./routes/user.routes');
const apii = require('./routes/auth.routes');

const app = express();
const db = require("./models");
const Role = db.role;
// Set up mongoose connection
const mongoose = require('mongoose');

//<------Cors-------->

let corsOptions = {
    origgin: "http://localhost:8081"
};

//<------Cors-------->


//<------MONGODB_CONNECT-------->
let dev_db_url = 'mongodb+srv://anchori:A1mBf0W3XL21nlLJ@sportcomdb.wsq9v.mongodb.net/sportcomdb?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

let dbb = mongoose.connection;
dbb.on('error', console.error.bind(console, 'MongoDB connection error:'), initial());
//<------MONGODB_CONNECT-------->

// <-------app.use----->
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/products', product);
app.use('/',views);
app.use('/api',api);
app.use('/api',apii);

//<--------AddRolesToDB------->
function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}
//<--------AddRolesToDB------->
// routes
function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}
//<---------Port-------->

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

module.exports = app;