const express = require('express');
//using the router constructor to create a new route
const router = express.Router();

const data = require('../data/data.json')


/*Setting up routes*/
//index route to render home page
router.get('/index', (req, res) => {


    res.render('index', data);

        // const err = new Error();
        // console.log('TESTING');

        // err.status = 500;
        // err.message = err.message || 'Oops it looks like something went wrong on the server';
        // next(err);
  
   
});

//about route to render about page
router.get('/about', (req, res) => {

    res.render('about');
    console.log('here is about data');
});


//  dynamic "project" routes (/projects/:id) based on the id of the project 

router.get('/project/:id', (req, res, next) => {
    console.log('id route called');
    // getting the id parameter frrom the incoming request
    const { id } = req.params;
    // looking up a single project by id
    const project = data.projects[id];

    if (id) {
        //if id route exists, render the project object to the 'project' pug
        res.render('project', {project});
    }
    else {
        const err = new Error();
        err.status = 404;
        err.message = err.message;
        next(err);
    }

});

module.exports = router;