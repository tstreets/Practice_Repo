const http = require('http');
const fs = require('fs');
const express = require('express');

const app = express();
app.use(express.static(`${__dirname}/public`));

app.get('**', (req,res,next)=> {
    if(req.url == '/favicon.ico') {
        return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fs.readFileSync('/index.html'));
    res.end();
})

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);