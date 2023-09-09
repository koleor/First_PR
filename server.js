const http = require('http');

function handleRequest(req, res) {
  res.statusCode = 200;
  res.end('Привет от сервера Node.js!\n');
}

const server = http.createServer(handleRequest);

function onServerListen() {
  console.log('Сервер запущен на порту 3000');
}

server.listen(3000, 'localhost', onServerListen);
