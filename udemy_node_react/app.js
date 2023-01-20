const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//bring in routes
const postRoutes = require('./routes/post');
// const {getPosts} = require('./routes/post'); //commented out when switching from app.get to app.use since we have custom routes.


//db
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI).then(() => {console.log('DB Connected')})

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});



// const myOwnMiddleware = (req, res, next) => {
//     console.log('middleware applied!!');
//     next(); //need to ensure we can go to next process.
// };

// middleware
app.use(morgan('dev'));
// app.use(myOwnMiddleware);
app.use(bodyParser.json());
//app.get('/', getPosts); //commented out because using custom middleware instead of built in
app.use('/', postRoutes);

const port = 8080
app.listen(port, () => {console.log(`A node js app is listening on port: ${port}`)});