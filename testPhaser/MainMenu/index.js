const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const routes = [{path: '**', file: 'index'}];
for(let route of routes) {
    app.get(route.path, function(req,res,next) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(fs.readFileSync(`/${routes.file}`));
        res.end();
    })
}

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(3000);