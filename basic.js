// load the things we need
var express = require('express');
var app = express();

// home page
app.get('/', function(req, res) {
    res.send("This is the home page.");
});

// about page
app.get('/about', function(req, res) {
    res.send("This is the about page.");
});

// about page
app.get('/name/:name', function(req, res) {    
    const name = req.params.name;
    res.send(`This is the ${name} page.`);
});

app.listen(8080);