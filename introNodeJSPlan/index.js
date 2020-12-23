/**
 * Import modules
 */
const main = require('./my_modules/main.js');
const http = require('http');
const fs = require('fs');

console.log(main);

/**
 * 
 * @param {http.ClientRequest} request 
 * @param {http.ServerResponse} response 
 */
const app = function(request, response) {
    /**
     * Whenever a user gets on our site show them our pages
     */
    if(request.url == '/') {
        response.write(fs.readFileSync('public/index.html'));
    }
    else {
        try {
            response.write(fs.readFileSync(`public/${request.url}`));
        }
        catch {
            try {
                response.write(fs.readFileSync(`public/${request.url}.html`));
            }
            catch {
                try {
                    response.write(fs.readFileSync(`node_modules/${request.url}`));
                }
                catch {
                    response.write(fs.readFileSync('public/404.html'));
                }
            }
        }
    }
    response.end();
}

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
const io = require('socket.io')(server);

const serverData = {
    msgs: []
}

io.on('connection', socket=> {

    socket.on('send message', msgInfo=> {
        msgInfo.user = socket.id;
        serverData.msgs.push(msgInfo);
        io.emit('all messages', {
            msgs: serverData.msgs
        })
    });

    socket.on('all messages', ()=> {
        io.emit('all messages', {
            msgs: serverData.msgs
        })
    })
})