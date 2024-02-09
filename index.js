const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello, world!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('Server is listening on port ' + port);
});