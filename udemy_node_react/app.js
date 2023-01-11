const express = require('express');
const app = express();
const morgan = require('morgan')

//get routes
//const postRoutes = require('./routes/post');
const {getPosts} = require('./routes/post');


// middleware

app.get('/', getPosts);

const port = 8080
app.listen(port, () => {console.log(`A node js app is listening on port: ${port}`)});