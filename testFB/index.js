const http = require('http');
const path = require('path');
const express = require('express');
const admin = require('firebase-admin');

const app = express();

app.get('**', function(req, res, next) {
    res.send('Hi');
})

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);

admin.initializeApp({
    credential: admin.credential.cert('data/tabletop-lobby-9585-firebase-adminsdk-vr07o-caa077cb21.json'),
    databaseURL: "https://tabletop-lobby-9585.firebaseio.com"
})

const firestore = admin.firestore();

firestore.collection('test')
.doc('Qr1otbV8iwKUh3OSA0J4')
.collection('items')
.add({name: 'Shield'})
.then(itemDoc=> console.log(itemDoc.id))
.catch(err=> console.warn(err));