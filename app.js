var fs = require('fs');
var path = require('path');
var express = require('express');

const INDEX_VIEW = path.join(__dirname, 'views','index.html');
const HTTP_PORT = process.env.PORT || 80;

var app = express();

app.get('/', (req,res) =>
    fs.createReadStream(INDEX_VIEW)
        .pipe(res)
);

app.listen(HTTP_PORT, () => console.log(`http server is running at http://localhost:${HTTP_PORT}`));
