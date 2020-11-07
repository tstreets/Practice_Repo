

/**
 * create http server and greet vistiors
 */
// const http = require('http');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Context-Type': 'text/html'});
//     res.end('Hi There');
// }).listen(8080);


/**
 * import and use my own module
 */
// const http = require('http');
// const dt = require('./mymodule');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Context-Type': 'text/html'});
//     res.write(`Current Date & Time: ${dt.myDateTime()}`);
//     res.end();
// }).listen(8080);


/**
 * create server and get queries
 */
// const http = require('http');
// const url = require('url');
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Context-Type': 'text/html'});
//     const q = url.parse(req.url, true).query;
//     const text = `${q.year} ${q.month}`;
//     res.write(text);
//     res.end();
// })
// .listen(8080);

/**
 * Read file then display in on server
 */
// const fs = require('fs');
// const http = require('http');
// http.createServer((req, res)=> {
//     fs.readFile('readfile.html', (err, data)=> {
//         res.writeHead(200, {'Context-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     })
// }).listen(8080);

/**
 * fs methods
 * appendFile: adds new content to end of file; !!(create new)
 * open: opens file for writing; !!(create new)
 * writeFile: replaces old content; !!(create new)
 * unlink: deletes file
 * rename: renames file
 */
// const fs = require('fs');
// fs.appendFile('testA.text', 'Hello', err=> {
//     if(err) throw err;
//     console.log('File Appended!');
// });
// fs.open('testA.text', 'w', err=> {
//     if(err) throw err;
//     console.log('File Opened');
// });
// fs.writeFile('testA.text', 'What\'s up', err=> {
//     if(err) throw err;
//     console.log('File Overwritten');
// });
// fs.unlink('testA.text', err=> {
//     if(err) throw err;
//     console.log('File Deleted');
// });
// fs.rename('testB.text', 'testA.text', err=> {
//     if(err) throw err;
//     console.log('File renames');
// });


/**
 * url properties
 */
// const url = require('url');
// const adr = `http://localhost:8080/default.htm?year=2020&month=October`;
// const q = url.parse(adr, true);
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);
// const qData = q.query;
// console.log(qData.month);


/**
 * Upload files to my server
 */
// const http = require('http');
// const formidable = require('formidable');
// const fs = require('fs');
// http.createServer((req, res)=> {
//     if(req.url == "/uploadfile") {
//         const form = new formidable.IncomingForm();
//         form.parse(req, (err, fields, files)=> {
//             console.log(files);
//             const oldpath = files.filetoupload.path;
//             const newpath = `C:/xampp/htdocs/practice_sites/testLeafLet/${files.filetoupload.name}`;
//             fs.rename(oldpath, newpath, err=> {
//                 if(err) throw err;
//                 res.write('File Successfully Uploaded');
//                 return res.end();
//             });
//         });
//     }
//     else {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(`
//             <form action="uploadfile" method="post" enctype="multipart/form-data">
//                 <input type="file" name="filetoupload"/>
//                 <input type="submit" value="Upload"/>
//             </form>
//         `);
//         return res.end();
//     }
// }).listen(8080);


/**
 * Email peeps from my server
 */
// require('dotenv').config();
// const mailjet = require('node-mailjet')
// .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);
// const request = mailjet
// .post("send", {'version': 'v3.1'})
// .request({
//     "Messages": [
//         {
//             "From": {
//                 "Email": "streetso71@gmail.com",
//                 "Name": "Ty Streets"
//             },
//             "To": [
//                 {
//                     "Email": "streetso71@gmail.com",
//                     "Name": "Ty Streets"
//                 }
//             ],
//             "Subject": "Node.js email",
//             "TextPart": "Dear Ty, This is sent through local nodejs server. From, Ty Streets",
//             "HTMLPart": "<h3>Dear Ty, This is sent through local nodejs server. From, Ty Streets<h3>"
//         }
//     ]
// });
// request
// .then((result) => {
//     console.log(result.body)
// })
// .catch((err) => {
//     console.log(err)
// })
