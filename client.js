const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  method: 'GET'
};

function onResponse(res) {
  console.log(`Статус ответа: ${res.statusCode}`);

  res.on('data', function(data) {
    console.log(`Полученные данные от сервера: ${data}`);
  });
}

function onError(error) {
  console.error(`Произошла ошибка запроса: ${error}`);
}

const req = http.request(options, onResponse);

req.on('error', onError);

req.end();
