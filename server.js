const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('Error: File not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
            }
            res.end();
        });
    } else if (req.url === '/styles.css') {
        fs.readFile('./styles.css', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.write('Error: File not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.write(data);
            }
            res.end();
        });
    } else {
        res.writeHead(404);
        res.write('Error: File not found');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});