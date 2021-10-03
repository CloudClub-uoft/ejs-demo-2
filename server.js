// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

//serve static files
app.use('/public', express.static('public'));

// index page 
app.get('/', function (req, res) {
    
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012 },
        { name: 'Tux', organization: "Linux", birth_year: 1996 },
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013 },
        { name: 'Helen', organization: "CC", birth_year: 1999 },
    ];    

    res.render('pages/index', {
        mascots: mascots,      
    });
    
});

// about page
app.get('/about', function (req, res) {
    res.render('pages/about');
});

// table page
app.get('/table', function(req, res) {
    res.render('pages/table');
})

app.listen(8080);
console.log('8080 is the magic port');
