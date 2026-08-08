const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', message: 'API is live on Zerops!' }));
});

server.listen(4000, () => {
  console.log('API listening on port 4000');
});
