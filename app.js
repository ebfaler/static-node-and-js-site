
//setting up an express dependencies
const express = require('express');
const data = require('./data/data.json');

//initializing express
const app = express();


/* Middleware */

// creating a static route to serve the static files
app.use('/static',express.static('public'));
//setting up view engine to pug
app.set('view engine', 'pug');

//import routes
const mainRoutes = require('./routes/index');

app.use(mainRoutes);


//will add error handler middleware below



//starting my server: listening on port 3000,

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});
