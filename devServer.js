const path = require('path');
var gzippo = require('gzippo');
var express = require('express');
var app = express();
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});
app.listen(process.env.PORT || 5000);