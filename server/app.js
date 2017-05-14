'use strict';

const express = require('express');
const serveStatic = require('serve-static');
const util = require('./util');

const app = express();

let parent = util.folder.parent(__dirname);
let port = 3000;

app.use(serveStatic(parent + '/public'));

app.listen(port, () => {
    console.log('Serving folder: ' + parent + '/public');
    console.log('localhost:' + port);
});

