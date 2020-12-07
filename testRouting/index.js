const http = require('http');
const path = require('path');
const engine = require('consolidate');
const express = require('express');
const app = express();

app.engine('pug', engine.pug);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const GamesModule = require('./models/game.js');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
    res.render('index');
});

app.get('/game/:gameid', function(req, res, next) {
    res.render('game');
})

app.get('**', function(req,res,next) {
    res.render('error');
})

const server = http.createServer(app);
server.listen(3000);

const io = require('socket.io')(server);

io.on('connection', socket=> {

    socket.on('new game', data=> {
        const newGame = new GamesModule.Game(serverData.games);
        serverData.games.push(newGame);

        socket.emit('new game', {gameid: newGame.id});
    });

    socket.on('check game', data=> {
        const found = !!(serverData.games.find(game=> game.id == data.gameid));
        socket.emit('game checked', {status: found});
    });

    socket.on('all games', ()=> {
        socket.emit('all games', {games: serverData.games});
    });

    socket.on('stop game', data=> {
        const index = serverData.games.findIndex(game=> game.id == data.gameid);
        serverData.games.splice(index, 1);
        socket.emit('game stopped');
    });

    socket.on('disconnect', data=> {
    });
});

const serverData = {};
serverData.games = [];

