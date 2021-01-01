const http = require('http');
const fs = require('fs');

const app = function(req, res) {
    if(req.url == '/') {
        writeHTML('public/index.html', res);
    }
    else if(fs.existsSync(`public${req.url}`)) {
        const extentions = req.url.split('.');
        let filetype = extentions[extentions.length - 1];
        if(filetype == 'html') {
            writeHTML(`public${req.url}`, res);
        }
        else {
            if(filetype == 'js') filetype = 'javascript';
            res.writeHead(200, {'Content-Type': `text/${filetype}`});
            res.write(fs.readFileSync(`public${req.url}`));
        }
    }
    else if(fs.existsSync(`public${req.url}.html`)) {
        writeHTML(`public${req.url}.html`, res);
    }
    else {
        // console.log(req.url);
    }
    res.end();
}

const port = 3000;
const server = http.createServer(app);
server.listen(port);

function writeHTML(filepath, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fs.readFileSync('public/temps/head.html'));
    res.write(fs.readFileSync(filepath));
    res.write(fs.readFileSync('public/temps/foot.html'));
}