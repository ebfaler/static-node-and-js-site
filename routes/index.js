const express = require('express');
//using the router constructor to create a new route
const router = express.Router();

const projects = require('../data/data.json').projects


/*Setting up routes*/
//index route to render home page
router.get('/index', (req, res) => {


    res.render(projects);
    console.log('here is project data');

});

//about route to render about page
router.get('/about', (req, res) => {

    res.render('about');
    console.log('here is about data');
});


//  dynamic "project" routes (/projects/:id) based on the id of the project 

router.get('/projects/:id', (req, res) => {
    // getting the id parameter frrom the incoming request
    const { id } = req.params;
    // looking up a single project by id
    const project = projects[id];

    //connecting to the project object to the 'project' pug
    res.render('project', project);

});

//error handling

// const err = new Error('Sorry, there has be an error!');
//         err.status = 500;
//         next(err);

//exporting this router file so that i can reference it in app.js
module.exports = router;