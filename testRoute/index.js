const http = require('http');
const fs = require('fs');
const express = require('express');


const app = express();

app.get('/', (req,res,next)=> {
    fs.readFile('public/index.html', function(err, data) {
        if(!err) {
            res.write(data);
        }
        res.end();
    })
})

app.get('**', (req,res,next)=> {
    fs.readFile('public/error.html', function(err, data) {
        if(!err) {
            res.write(data);
        }
        res.end();
    })
})


const port = 3000;
const server = http.createServer(app);
server.listen(port);