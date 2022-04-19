
//setting up an express dependencies
const express = require('express');
const data = require('./data/data.json');

//initializing express
const app = express();


/*****  MIDDLEWARE *****/

// creating a static route to serve the static files
app.use('/static',express.static('public'));
app.use('/images',express.static('images'));
//setting up view engine to pug
app.set('view engine', 'pug');

//import routes
const mainRoutes = require('./routes/index');

app.use(mainRoutes);


/* Error Handlers */

/* 404 handler to catch undefined or non-existent route requests */ 
app.use((req, res, next) => {

    console.log('404 error handler called');
     //set response to 404 and render the 'page-not-found' view
    res.status(404).render('page-not-found');
  });
  

  /* Global error handler */
  //called when all other errors occur
  app.use((err, req, res, next) => {
  
    if (err) {
      console.log('Global error handler called', err);
    }

      //If the error status is 404: Set the response status to 404 and render page-not-found
      //else: 
        //   * Set the error message to the specific given message, or specify a general, 
        //     default error message
        //   * Set response status to the given specific error status OR, set it to 500 by default if no error status is set
        //   * Render the 'error' view, passing it the error object
    if (err.status === 404) {
      res.status(404).render('page-not-found', { err });
    } else {
      err.message = err.message || `Oops!  It looks like something went wrong on the server.`;
      res.status(err.status || 500).render('error', { err });
    }
  });











//starting my server: listening on port 3000,

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});
