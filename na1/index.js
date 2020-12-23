/**
 * Require our dependencies
 */
const http = require('http');
const fs = require('fs');

/**
 * Handle interactions between server and clients
 * @param {http.IncomingMessage} req Client's message to server
 * @param {http.ServerResponse} res Server's response to client
 */
const app = function(req, res) {
    if(req.url == '/') {
        writeHTMLPage(res, `public/index.html`);
    }
    else if(fs.existsSync(`public${req.url}`)) {
        const extentions = req.url.split('.');
        const filetype = extentions[extentions.length - 1];
        if(filetype == 'html') {
            writeHTMLPage(res, `public${req.url}`);
        }
        else {
            res.writeHead(200, {'Content-Type': `text/${filetype}`});
            res.write(fs.readFileSync(`public${req.url}`));
        }
    }
    else if(fs.existsSync(`public${req.url}.html`)) {
        writeHTMLPage(res, `public${req.url}.html`);
    }
    else if(req.url == '/page-not-found') {
        writeHTMLPage(res, `public/404.html`);
    }
    else {
        res.write(`<script>location.href = '/page-not-found'</script>`);
    }
    res.end();
}

function writeHTMLPage(res, filepath) {
    res.writeHead(200, {'Content-Type': `text/html`});
    res.write(fs.readFileSync('public/temps/head.html'));
    res.write(fs.readFileSync(filepath));
    res.write(fs.readFileSync('public/temps/foot.html'));
}

/**
 * Port number used for the server
 */
const port = 3000;

/**
 * Our app's server
 */
const server = http.createServer(app);
server.listen(port);