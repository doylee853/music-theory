const express = require('express');
const path = require('path');
const { response } = require('express');
const port = 3000;

const app = express();
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static('static'))

app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname, '/static/html/index.html'));
});

app.get('/search',function(req, res) {
    res.sendFile(path.join(__dirname, '/static/html/searchpage.html'));
});

app.get('/FailedSearch',function(req, res) {
    res.sendFile(path.join(__dirname, '/static/html/FailedSearch.html'));
});


app.listen(3000);