const http = require('http');
const fs = require('fs');

const app = function(req,res) {
    if(req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(fs.readFileSync('public/index.html'));
    }
    else {
        try {
            res.write(fs.readFileSync(`public${req.url}`));
        }
        catch (err) {
            try {
                res.write(fs.readFileSync(`public${req.url}.html`));
            }
            catch (err) {
                try {
                    res.write(fs.readFileSync(`public${req.url}/index.html`));
                }
                catch (err) {}
            }
        }
    }
    res.end();
}

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);