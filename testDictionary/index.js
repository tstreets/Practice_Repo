require('dotenv').config();
const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const engine = require('consolidate');

const app = express();
app.engine('pug', engine.pug);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const port = process.env.PORT || 3000;

app.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Test Dictionary',
        animals: animals
    });
})

app.get('/about', function(req, res, next) {
    res.render('about', {
        title: 'Test Dictionary - About'
    });
})

app.get('/error', function(req, res, next) {
    res.render('error', {
        title: 'Test Dictionary - Page Not Found'
    });
})

app.get('**', function(req, res, next) {
    res.write(`<script>location.href='/error'</script>`);
    res.end();
})

const server = http.createServer(app);
server.listen(port);

function generateCode() {
    let newCode = ``;
    for(let i = 0; i < 4; i++) {
        const rndNum = parseInt(Math.random() * 10);
        newCode += `${rndNum}`;
    }
    const unique = !(animals.find(animal=> animal.code == newCode));
    return (unique) ? newCode : generateCode();
}

const animals = [
    {name: 'Hippo'},
    {name: 'Cow'},
    {name: 'Fox'}
];

animals.forEach(animal=> {
    animal.code = generateCode();
})
console.log(animals);